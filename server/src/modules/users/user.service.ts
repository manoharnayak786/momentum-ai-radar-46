import { mockDb } from '../../db/mock';
import { AppError } from '../../middleware/errorHandler';

export class UserService {
  static async getUserById(userId: string) {
    const user = await mockDb.findUserById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const memberships = await mockDb.findMembershipsByUserId(userId);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      organizations: memberships.map(m => ({
        id: m.org.id,
        name: m.org.name,
        role: m.role,
      })),
    };
  }
}