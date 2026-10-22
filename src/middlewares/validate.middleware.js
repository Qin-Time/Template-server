// src/middlewares/validate.middleware.js

/**
 * Zod 参数校验中间件工厂
 * @param {import('zod').ZodObject<any>} schema - Zod 校验规则
 */
export const validate = (schema) => {
  return (req, res, next) => {
    try {
      // 提取需要校验的数据
      const dataToValidate = {
        body: req.body,
        query: req.query,
        params: req.params,
      };

      // 使用 Zod 进行解析（如果校验失败会抛出 ZodError）
      const parsed = schema.parse(dataToValidate);

      // 将校验且处理后的数据挂载回 req，确保类型安全（比如去除多余字段）
      if (parsed.body) req.body = parsed.body;
      if (parsed.query) req.query = parsed.query;
      if (parsed.params) req.params = parsed.params;

      // 校验通过，进入下一个中间件或 Controller
      next();
    } catch (error) {
      // 捕获错误（ZodError 或其它错误），交给全局错误处理器
      next(error); 
    }
  };
};