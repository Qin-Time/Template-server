// 业务错误类
// 使用：throw new ApiError(404, '用户不存在')
class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export default ApiError;
