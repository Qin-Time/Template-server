# server

> **Express + ESM Node.js backend template**
> **Express + ESM Node.js 后端模板**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-5.3.0-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-ISC-orange)](LICENSE)

A lightweight Node.js backend template built with Express, using ES Module syntax.
Pre-configured with environment variables and CORS support, ready for REST API development.

一个基于 Express、采用 ES Module 语法的轻量 Node.js 后端模板。
已预置环境变量与 CORS 支持，开箱即可进行 REST API 开发。

---

## ✨ Features / 特性

- ✅ ES Module (`"type": "module"`) — ES Module 语法
- ✅ Express v5 — Express v5
- ✅ Native hot reload via `node --watch` — 基于 `node --watch` 的原生热更新（无需 nodemon）
- ✅ Native env file loading (`--env-file=.env`) — 基于 Node.js 原生的环境变量注入（无需 dotenv）
- ✅ `cors` cross-origin resource sharing — `cors` 跨域资源共享
- ✅ ESLint code linting — ESLint 代码校验
- ✅ Clean project structure, easy to extend — 清晰的项目结构，易于扩展

> **Note / 说明**：本模板**不使用 nodemon**。开发期热重载直接由 Node.js 原生的
> `--watch` 标志提供（需 **Node.js 20.13+ / 22+**，`--watch` 自 20.13 起转为稳定特性）。
> This template **does not use nodemon**. Development hot-reload is provided natively by
> Node.js `--watch` flag (requires **Node.js 20.13+ / 22+**).

---

## 📁 Project Structure / 项目结构

```
server/
├── src/
│   ├── config/          # Configurations / 配置 (数据库连接、第三方服务配置等)
│   ├── controllers/     # Route handlers / 控制器 (接收请求，调用 Service，返回响应)
│   ├── middlewares/     # Custom middleware / 自定义中间件 (鉴权、错误处理、日志等)
│   ├── models/          # Data models / 数据模型 (Mongoose/Sequelize 模型定义)
│   ├── routes/          # API routes / API 路由 (定义 URL 路径与 Controller 的映射)
│   ├── services/        # Business logic / 业务逻辑 (核心处理逻辑，与 HTTP 解耦)
│   ├── utils/           # Helper functions / 工具函数 (通用辅助方法)
│   ├── validators/      # Request validation / 参数校验 (Joi/Zod 校验规则)
│   ├── app.js           # Express app assembly / 应用装配 (初始化 Express，注册中间件和路由)
│   └── server.js        # Application entry / 应用入口 (启动 HTTP Server，监听端口)
├── tests/               # Unit & Integration tests / 测试文件
├── .env                 # Local env / 本地环境变量 (⚠️ Git Ignore，敏感信息)
├── .env.example         # Env template / 环境变量模板 (✅ 可提交，供他人参考配置项)
├── .eslintrc.cjs        # ESLint configuration / 代码规范配置
├── .gitignore           # Git ignore rules / Git 忽略规则
├── package.json         # Project manifest & scripts / 项目依赖与脚本
├── package-lock.json    # Dependency lock file / 依赖锁定文件
└── README.md            # Project documentation / 项目说明文档
```

---

## 🚀 Quick Start / 快速开始

### Prerequisites / 前置条件

- Node.js >= 20.13 (for native `--watch`) / 用于原生 `--watch` 热更新

### 1. Clone & Install dependencies / 克隆并安装依赖

```
git clone <your-repo-url>
cd server
npm install
```

### 2. Environment setup / 环境变量配置

Copy `.env.example` to `.env` in the `src/` directory / 在 `src/` 目录下复制 `.env.example` 为 `.env`：

```
cp src/.env.example src/.env
```

`.env` content / 内容如下：

```
PORT=3000
NODE_ENV=development
```

### 3. Run dev server (native hot reload) / 启动开发服务（原生热更新）

```
npm run dev
```

> Equivalent command / 等价命令：`node --watch src/server.js`

Server runs on `[http://localhost:3000](http://localhost:3000)` / 服务运行于该地址

### 4. Start in production / 启动生产服务

```
npm run start
```

### 5. Lint code / 代码校验

```
npm run lint
```

### 6. Clean node_modules / 清理依赖

```
npm run clean
```

---

## 📜 Scripts / 脚本命令

| Command 命令        | Description 说明                                          |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Start dev server with native `node --watch` / 原生热更新启动开发服务 |
| `npm run start`     | Start production server with node / node 启动生产服务     |
| `npm run lint`      | ESLint check for `src/` / 校验 `src/` 目录                |
| `npm run clean`     | Remove node_modules / 删除 node_modules                   |
| `npm test`          | Reserved for tests / 预留测试                             |

---

## 🧪 API Example / 接口示例

`src/routes/demo.js`

```javascript
import { Router } from 'express';
const router = Router();

router.get('/hello', (req, res) => {
  res.json({
    code: 200,
    message: 'success',
    data: 'Hello Express ESM'
  });
});

router.post('/post', (req, res) => {
  res.json({
    code: 200,
    message: 'Received body',
    data: req.body
  });
});

export default router;
```

Register route in `src/app.js` / 在 `src/app.js` 中注册路由：

```javascript
import demoRouter from './routes/demo.js';
app.use('/api', demoRouter);
```

- GET `[http://localhost:3000/api/hello](http://localhost:3000/api/hello)`
- POST `[http://localhost:3000/api/post](http://localhost:3000/api/post)`

---

## 🛡️ Middleware Examples / 中间件示例

### 404 Handler / 404 处理

```javascript
app.use((req, res) => {
  res.status(404).json({
    code: 404,
    message: 'API Not Found'
  });
});
```

### Global Error Handler / 全局错误处理

```javascript
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    code: err.statusCode || 500,
    message: err.message || 'Internal Server Error'
  });
});
```

---

## ⚠️ Important Notes / 重要说明

1. This project uses **ESM**, file extensions `.js` cannot be omitted in `import`.
   本项目使用 **ESM**，`import` 中 `.js` 扩展名不可省略。
2. `.env` file **must not be committed to git**, add to `.gitignore`. Commit `.env.example` instead.
   `.env` 文件**切勿提交到 git**，应加入 `.gitignore`；改为提交 `.env.example` 模板。
3. `__dirname` is not available in ESM. Use this snippet:
   ESM 中没有 `__dirname`，可使用以下写法：

```javascript
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

---

## 📦 Optional Extensions / 可选扩展

Install as needed / 按需安装：

- `prisma` / `mongoose`: Database ORM/ODM — 数据库 ORM/ODM
- `zod`: Request schema validation — 请求参数校验
- `jsonwebtoken`: JWT authentication — JWT 鉴权
- `multer`: File upload — 文件上传
- `helmet`: Security headers — 安全请求头
- `winston`: Logging — 日志
- `pm2`: Process manager for production — 生产环境进程管理

---

## 🚢 Production Deployment Recommendation / 生产部署建议

```
# Install pm2 globally / 全局安装 pm2
npm install -g pm2

# Start service / 启动服务
pm2 start src/server.js --name="express-server"

# View logs / 查看日志
pm2 logs express-server
```

Suggest to use Nginx as reverse proxy and enable HTTPS.
建议使用 Nginx 作为反向代理并启用 HTTPS。

---

## 📄 License / 许可证

[ISC](LICENSE)
