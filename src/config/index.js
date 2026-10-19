// import dotenv from 'dotenv';
// dotenv.config();
// 抛弃了dotenv，拥抱node原生命令--env-file=.env

import { z } from 'zod';

// 定义环境变量的类型和校验规则
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000), // 自动将字符串转为数字并校验
  DATABASE_URL: z.string().url("必须是合法的数据库连接URL"),
  JWT_SECRET: z.string().min(10, "JWT 密钥太短了，不安全"),
});

// 校验，如果失败直接抛出详细错误并退出
const env = envSchema.parse(process.env);

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  db: { url: env.DATABASE_URL },
  jwt: { secret: env.JWT_SECRET }
};

export default config;