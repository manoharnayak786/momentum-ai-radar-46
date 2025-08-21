import { prisma } from '@/prisma/client';

export class OrgService {
  static async getUserOrganizations(userId: string) {
    const memberships = await prisma.membership.findMany({
      where: { userId },
      include: {
        org: {
          select: {
            id: true,
            name: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return memberships.map((m: any) => ({
      id: m.org.id,
      name: m.org.name,
      role: m.role,
      createdAt: m.org.createdAt,
    }));
  }

  static async createOrganization(userId: string, name: string) {
    const result = await prisma.$transaction(async (tx: any) => {
      // Create organization
      const org = await tx.organization.create({
        data: { name },
      });

      // Create membership for the creator as owner
      await tx.membership.create({
        data: {
          userId,
          orgId: org.id,
          role: 'OWNER',
        },
      });

      return org;
    });

    return {
      id: result.id,
      name: result.name,
      role: 'OWNER' as const,
      createdAt: result.createdAt,
    };
  }
}