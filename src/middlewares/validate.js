// 参数校验中间件
// 使用：router.post('/', validate(schema), ctrl.create)
// 需要先安装校验库：npm i joi（或 zod）
export default (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const message = error.details.map((d) => d.message).join('; ');
    const err = new Error(message);
    err.status = 400;
    return next(err);
  }
  req.body = value;
  next();
};
