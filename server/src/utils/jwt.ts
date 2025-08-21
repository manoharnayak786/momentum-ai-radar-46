import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { config } from '@/config/env';

export interface JwtPayload {
  userId: string;
  email: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export class JwtUtils {
  static generateAccessToken(payload: JwtPayload): string {
    return jwt.sign(
      payload as any, 
      config.accessTokenSecret as string, 
      { expiresIn: config.jwt.accessTokenExpiry } as jwt.SignOptions
    );
  }

  static generateRefreshToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  static generateTokenPair(payload: JwtPayload): TokenPair {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(),
    };
  }

  static verifyAccessToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, config.accessTokenSecret) as JwtPayload;
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }

  static hashRefreshToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}