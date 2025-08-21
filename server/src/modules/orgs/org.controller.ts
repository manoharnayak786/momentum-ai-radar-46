import { Request, Response, NextFunction } from 'express';
import { OrgService } from './org.service';
import { z } from 'zod';

const CreateOrgRequest = z.object({
  name: z.string().min(1, 'Organization name is required').max(100, 'Name must be less than 100 characters'),
});

export class OrgController {
  static async getOrganizations(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ error: { message: 'Unauthorized' } });
        return;
      }

      const organizations = await OrgService.getUserOrganizations(req.user.userId);
      res.json({ organizations });
    } catch (error) {
      next(error);
    }
  }

  static async createOrganization(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ error: { message: 'Unauthorized' } });
        return;
      }

      const data = CreateOrgRequest.parse(req.body);
      const organization = await OrgService.createOrganization(req.user.userId, data.name);
      
      res.status(201).json({ organization });
    } catch (error) {
      next(error);
    }
  }
}