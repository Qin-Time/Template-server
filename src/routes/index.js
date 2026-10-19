import { Router } from 'express';
import healthRouter from './health.routes.js';

const router = Router();

// ===== 挂载子路由 =====
router.use('/health', healthRouter);
// router.use('/auth', authRouter);
// router.use('/users', userRouter);

export default router;