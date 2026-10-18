import { Router } from 'express';
const router = Router();

// ===== 挂载子路由 =====
router.use('/health', await import('./health.routes.js'));
// router.use('/auth', await import('./auth.routes.js'));
// router.use('/users', await import('./user.routes.js'));

export default router;