import { prisma } from '@/prisma/client';
import { AppError } from '@/middleware/errorHandler';

export class UserService {
  static async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        memberships: {
          include: {
            org: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      organizations: user.memberships.map((m: any) => ({
        id: m.org.id,
        name: m.org.name,
        role: m.role,
      })),
    };
  }
}