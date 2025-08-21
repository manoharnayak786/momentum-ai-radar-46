import { Router } from 'express';
import { authGuard } from '@/middleware/authGuard';
import { OrgController } from './org.controller';

const router = Router();

router.get('/', authGuard, OrgController.getOrganizations);
router.post('/', authGuard, OrgController.createOrganization);

export default router;