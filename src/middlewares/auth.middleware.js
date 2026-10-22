import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    // 这里如果是普通项目，返回 401 提示未登录
    return res.status(401).json({ code: 401, message: '未提供认证 Token' });
  }

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) return res.status(403).json({ code: 403, message: 'Token 无效或已过期' });
    
    req.user = user; // 把解析出来的用户信息挂载到 req 上
    next();
  });
};