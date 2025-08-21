import { Router } from 'express';
import { authGuard } from '@/middleware/authGuard';
import { UserController } from './user.controller';

const router = Router();

router.get('/me', authGuard, UserController.getMe);

export default router;