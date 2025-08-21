// Mock database for development/testing
interface MockUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
}

interface MockOrganization {
  id: string;
  name: string;
  createdAt: string;
}

interface MockMembership {
  id: string;
  userId: string;
  orgId: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  createdAt: string;
}

interface MockRefreshToken {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  createdAt: string;
}

class MockDatabase {
  private users: MockUser[] = [];
  private organizations: MockOrganization[] = [];
  private memberships: MockMembership[] = [];
  private refreshTokens: MockRefreshToken[] = [];

  // User methods
  async createUser(data: { email: string; name: string; passwordHash: string }): Promise<MockUser> {
    const user: MockUser = {
      id: this.generateId(),
      email: data.email,
      name: data.name,
      passwordHash: data.passwordHash,
      createdAt: new Date().toISOString(),
    };
    this.users.push(user);
    return user;
  }

  async findUserByEmail(email: string): Promise<MockUser | null> {
    return this.users.find(user => user.email === email) || null;
  }

  async findUserById(id: string): Promise<MockUser | null> {
    return this.users.find(user => user.id === id) || null;
  }

  // Organization methods
  async createOrganization(data: { name: string }): Promise<MockOrganization> {
    const org: MockOrganization = {
      id: this.generateId(),
      name: data.name,
      createdAt: new Date().toISOString(),
    };
    this.organizations.push(org);
    return org;
  }

  async findOrganizationById(id: string): Promise<MockOrganization | null> {
    return this.organizations.find(org => org.id === id) || null;
  }

  // Membership methods
  async createMembership(data: { userId: string; orgId: string; role: 'OWNER' | 'ADMIN' | 'MEMBER' }): Promise<MockMembership> {
    const membership: MockMembership = {
      id: this.generateId(),
      userId: data.userId,
      orgId: data.orgId,
      role: data.role,
      createdAt: new Date().toISOString(),
    };
    this.memberships.push(membership);
    return membership;
  }

  async findMembershipsByUserId(userId: string): Promise<Array<MockMembership & { org: MockOrganization }>> {
    const userMemberships = this.memberships.filter(m => m.userId === userId);
    return userMemberships.map(membership => {
      const org = this.organizations.find(o => o.id === membership.orgId)!;
      return { ...membership, org };
    });
  }

  // Refresh token methods
  async createRefreshToken(data: { userId: string; token: string; expiresAt: string }): Promise<MockRefreshToken> {
    const refreshToken: MockRefreshToken = {
      id: this.generateId(),
      userId: data.userId,
      token: data.token,
      expiresAt: data.expiresAt,
      createdAt: new Date().toISOString(),
    };
    this.refreshTokens.push(refreshToken);
    return refreshToken;
  }

  async findRefreshToken(token: string): Promise<(MockRefreshToken & { user: MockUser }) | null> {
    const refreshToken = this.refreshTokens.find(rt => rt.token === token);
    if (!refreshToken) return null;
    
    const user = this.users.find(u => u.id === refreshToken.userId);
    if (!user) return null;
    
    return { ...refreshToken, user };
  }

  async deleteRefreshToken(token: string): Promise<void> {
    this.refreshTokens = this.refreshTokens.filter(rt => rt.token !== token);
  }

  async deleteExpiredRefreshTokens(userId: string): Promise<void> {
    const now = new Date().toISOString();
    this.refreshTokens = this.refreshTokens.filter(rt => 
      rt.userId !== userId || rt.expiresAt > now
    );
  }

  private generateId(): string {
    return 'mock_' + Math.random().toString(36).substr(2, 9);
  }
}

export const mockDb = new MockDatabase();