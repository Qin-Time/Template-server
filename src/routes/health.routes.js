import { Router } from 'express';
import { ok } from '../utils/response.js';

const router = Router();

// GET /api/health
router.get('/', (req, res) => {
  ok(res, { status: 'ok', uptime: process.uptime() });
});

export default router;
