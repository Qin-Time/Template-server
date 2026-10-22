import { Router } from 'express';
const router = Router();

// 存活探针（Liveness）：极简，不查数据库
router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 就绪探针（Readiness）：可以在这里查数据库
router.get('/ready', async (req, res) => {
  // 如果你未来上了 Prisma，可以在这里发个简单的 SELECT 1
  // await prisma.$queryRaw`SELECT 1`;
  res.status(200).json({ status: 'ready' });
});

export default router;