import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// ===== 1. 通用中间件 =====
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// ===== 2. 挂载路由 =====
app.use('/api', routes);

// ===== 3. 404 兜底 =====
app.use((req, res) => {
  res.status(404).json({ code: 404, message: 'Route not found' });
});

// ===== 4. 全局错误处理 =====
app.use(errorHandler);

export default app;