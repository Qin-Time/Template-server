import { Router } from 'express';

// 引入子路由
import healthRouter from './health.routes.js';
import authRouter from './auth.routes.js';
// import userRouter from './user.routes.js';
// import productRouter from './product.routes.js';

const router = Router();

// ===== 挂载子路由 =====
// ===== 基础与公开接口（无需鉴权） =====
router.use('/health', healthRouter);
router.use('/auth', authRouter);

// ===== 受保护的业务接口,鉴权拦截由子路由控制 =====
// router.use('/users', userRouter);
// router.use('/products', productRouter);

export default router;