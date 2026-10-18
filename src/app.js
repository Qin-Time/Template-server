import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// ===== 1. 通用中间件 =====
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// ===== 2. 健康检查（放最前，不受鉴权影响） =====
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ===== 3. 业务路由 =====
app.use('/api', routes);

// ===== 4. 404 兜底 =====
app.use((req, res) => {
  res.status(404).json({ code: 404, message: 'Route not found' });
});

// ===== 5. 全局错误处理（必须最后） =====
app.use(errorHandler);

export default app;