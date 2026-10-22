import { Router } from 'express';
import { validate } from '../middlewares/validate.middleware.js'; // Zod 校验中间件
import { authenticateToken } from '../middlewares/auth.middleware.js'; // 鉴权中间件
import { registerSchema, loginSchema } from '../validators/auth.validator.js'; // Zod 规则
import * as authController from '../controllers/auth.controller.js';

const router = Router();

// ==========================================
// 公开路由（无需 Token）
// ==========================================

/**
 * @route   POST /api/auth/register
 * @desc    用户注册
 */
router.post('/register', validate(registerSchema), authController.register);

/**
 * @route   POST /api/auth/login
 * @desc    用户登录
 */
router.post('/login', validate(loginSchema), authController.login);

// ==========================================
// 受保护路由（必须携带有效 Token）
// ==========================================

// 挂载鉴权中间件，保护下面的路由
router.use(authenticateToken);

/**
 * @route   GET /api/auth/me
 * @desc    获取当前登录用户信息
 */
router.get('/me', authController.getMe);

/**
 * @route   POST /api/auth/logout
 * @desc    用户登出（通常是清除客户端 Cookie 或服务端废弃 Token）
 */
router.post('/logout', authController.logout);

export default router;