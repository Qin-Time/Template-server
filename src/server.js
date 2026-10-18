import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import config from './config.js';

const server = app.listen(config.port, () => {
  console.log(`✅ Server: http://localhost:${config.port} [${config.env}]`);
});

// 优雅关闭
const shutdown = (signal) => {
  console.log(`\n${signal} received, shutting down...`);
  server.close(() => process.exit(0));
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

// 兜底捕获Promise异常
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  shutdown('unhandledRejection');
});