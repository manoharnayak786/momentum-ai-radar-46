import { mockDb } from '../../db/mock';

export class OrgService {
  static async getUserOrganizations(userId: string) {
    const memberships = await mockDb.findMembershipsByUserId(userId);

    return memberships.map(m => ({
      id: m.org.id,
      name: m.org.name,
      role: m.role,
      createdAt: m.org.createdAt,
    }));
  }

  static async createOrganization(userId: string, name: string) {
    // Create organization
    const org = await mockDb.createOrganization({ name });

    // Create membership for the creator as owner
    await mockDb.createMembership({
      userId,
      orgId: org.id,
      role: 'OWNER',
    });

    return {
      id: org.id,
      name: org.name,
      role: 'OWNER' as const,
      createdAt: org.createdAt,
    };
  }
}