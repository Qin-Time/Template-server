// 全局错误处理：必须 4 个参数，Express 才识别
// 放在所有中间件最后

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || '服务器内部错误';

  // 非业务错误打日志
  if (status >= 500) {
    console.error('[Error]', {
      url: req.originalUrl,
      method: req.method,
      message: err.message,
      stack: err.stack,
    });
  }

  res.status(status).json({
    code: status,
    message: process.env.NODE_ENV === 'production' && status >= 500
      ? '服务器内部错误'
      : message,
  });
};
