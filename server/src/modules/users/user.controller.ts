import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';

export class UserController {
  static async getMe(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ error: { message: 'Unauthorized' } });
        return;
      }

      const user = await UserService.getUserById(req.user.userId);
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
}