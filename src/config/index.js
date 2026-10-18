import dotenv from 'dotenv';
dotenv.config();

export default {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  // 按需启用
  // db: {
  //   url: process.env.DATABASE_URL,
  // },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  //   expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  // },
};