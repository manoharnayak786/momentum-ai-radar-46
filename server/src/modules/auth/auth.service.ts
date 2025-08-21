import bcrypt from 'bcrypt';
import { prisma } from '@/prisma/client';
import { JwtUtils } from '@/utils/jwt';
import { config } from '@/config/env';
import { AppError } from '@/middleware/errorHandler';
import { RegisterRequestType, LoginRequestType, AuthResponse, RefreshResponse } from './auth.types';

export class AuthService {
  static async register(data: RegisterRequestType): Promise<AuthResponse> {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new AppError('User with this email already exists', 409);
    }

    // Hash password
    const passwordHash = await bcrypt.hash(data.password, config.bcrypt.saltRounds);

    // Create user and default organization in a transaction
    const result = await prisma.$transaction(async (tx: any) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
        },
      });

      // Create default organization
      const org = await tx.organization.create({
        data: {
          name: `${data.name}'s Workspace`,
        },
      });

      // Create membership
      await tx.membership.create({
        data: {
          userId: user.id,
          orgId: org.id,
          role: 'OWNER',
        },
      });

      return user;
    });

    // Generate tokens
    const tokens = JwtUtils.generateTokenPair({
      userId: result.id,
      email: result.email,
    });

    // Store refresh token
    await this.storeRefreshToken(result.id, tokens.refreshToken);

    return {
      user: {
        id: result.id,
        email: result.email,
        name: result.name,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  static async login(data: LoginRequestType): Promise<AuthResponse> {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(data.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    // Generate tokens
    const tokens = JwtUtils.generateTokenPair({
      userId: user.id,
      email: user.email,
    });

    // Store refresh token
    await this.storeRefreshToken(user.id, tokens.refreshToken);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  static async refresh(refreshToken: string): Promise<RefreshResponse> {
    const hashedToken = JwtUtils.hashRefreshToken(refreshToken);

    // Find refresh token
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: hashedToken },
      include: { user: true },
    });

    if (!storedToken) {
      throw new AppError('Invalid refresh token', 401);
    }

    // Check if token is expired
    if (storedToken.expiresAt < new Date()) {
      // Delete expired token
      await prisma.refreshToken.delete({
        where: { id: storedToken.id },
      });
      throw new AppError('Refresh token expired', 401);
    }

    // Generate new access token
    const accessToken = JwtUtils.generateAccessToken({
      userId: storedToken.user.id,
      email: storedToken.user.email,
    });

    return { accessToken };
  }

  static async logout(refreshToken: string): Promise<void> {
    const hashedToken = JwtUtils.hashRefreshToken(refreshToken);

    // Delete refresh token
    await prisma.refreshToken.deleteMany({
      where: { token: hashedToken },
    });
  }

  private static async storeRefreshToken(userId: string, refreshToken: string): Promise<void> {
    const hashedToken = JwtUtils.hashRefreshToken(refreshToken);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    // Clean up old tokens for this user
    await prisma.refreshToken.deleteMany({
      where: {
        userId,
        expiresAt: { lt: new Date() },
      },
    });

    // Store new token
    await prisma.refreshToken.create({
      data: {
        userId,
        token: hashedToken,
        expiresAt,
      },
    });
  }
}