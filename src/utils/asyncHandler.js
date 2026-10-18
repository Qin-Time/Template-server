// 包装 async 控制器，自动捕获 Promise 异常
// 使用：router.get('/', asyncHandler(ctrl.list))
export default (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
