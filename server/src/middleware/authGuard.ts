import { Request, Response, NextFunction } from 'express';
import { JwtUtils } from '@/utils/jwt';
import { AppError } from './errorHandler';

export const authGuard = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Access token required', 401);
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const payload = JwtUtils.verifyAccessToken(token);
    
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};