// 服务层：业务逻辑，与 HTTP 无关
// 命名：xxx.service.js
// 原则：不出现 req/res，方便单测
import ApiError from '../utils/ApiError.js';

export async function list(query) {
  // 业务逻辑写这里
  return { list: [], total: 0 };
}

export async function create(data) {
  // 业务校验
  if (!data.name) {
    throw new ApiError(400, 'name 为必填项');
  }
  // 业务处理
  return { id: 1, ...data };
}
