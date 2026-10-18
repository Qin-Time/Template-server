// 控制器层：接收请求 → 调 service → 返回响应
// 命名：xxx.controller.js
// 原则：保持薄，不写业务逻辑
import { ok, created } from '../utils/response.js';

// 示例：获取列表
export async function list(req, res, next) {
  try {
    // const data = await someService.list(req.query);
    ok(res, { list: [], total: 0 });
  } catch (err) {
    next(err);
  }
}

// 示例：创建
export async function create(req, res, next) {
  try {
    // const data = await someService.create(req.body);
    created(res, { id: 1 });
  } catch (err) {
    next(err);
  }
}
