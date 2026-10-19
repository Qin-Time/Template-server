import { Router } from 'express';
const router = Router();

// ===== 挂载子路由 =====
router.get('/health', await import('./health.routes.js'));
// router.post('/auth', await import('./auth.routes.js'));
// router.get('/users', await import('./user.routes.js'));

export default router;