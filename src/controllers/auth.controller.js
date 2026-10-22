// src/controllers/auth.controller.js
// ！！！
// ！！！
// 本项目还需要重点写server层，目前auth.service.js为空
// ！！！


import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
  const { email, password, name } = req.body;
  // 调用 Service 处理业务逻辑
  const user = await authService.registerUser({ email, password, name });
  res.status(201).json({ code: 201, message: '注册成功', data: user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // 校验密码并签发 Token
  const result = await authService.loginUser(email, password);
  res.status(200).json({ code: 200, message: '登录成功', data: result });
};

export const getMe = async (req, res) => {
  // req.user 是由 authenticateToken 中间件注入的
  const user = await authService.getUserById(req.user.id);
  res.status(200).json({ code: 200, data: user });
};

export const logout = async (req, res) => {
  // 如果用的是无状态 JWT，通常前端删除本地 Token 即可，后端只需返回成功
  res.status(200).json({ code: 200, message: '登出成功' });
};