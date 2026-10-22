import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email('邮箱格式不正确'),
    password: z.string().min(6, '密码至少需要 6 位'),
    name: z.string().min(2, '姓名至少 2 个字符').optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('邮箱格式不正确'),
    password: z.string().min(1, '密码不能为空'),
  }),
});