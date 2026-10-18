// JWT 认证中间件
// 使用：在路由中 router.get('/me', auth, ctrl.getMe)
// 需要先安装 jsonwebtoken：npm i jsonwebtoken

import jwt from 'jsonwebtoken';
import config from '../config.js';

export default (req, res, next) => {
  // 模板默认关闭，需要时取消注释
  // const header = req.headers.authorization || '';
  // const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  //
  // if (!token) {
  //   const err = new Error('未登录');
  //   err.status = 401;
  //   return next(err);
  // }
  //
  // try {
  //   req.user = jwt.verify(token, config.jwt.secret);
  //   next();
  // } catch {
  //   const err = new Error('Token 无效');
  //   err.status = 401;
  //   next(err);
  // }

  next(); // 模板默认放行
};
