# server

> 
> Express + ESM Node.js backend template

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-5.3.0-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-ISC-orange)](LICENSE)

A lightweight Node.js backend template built with Express, using ES Module syntax.
Pre-configured with environment variables and CORS support, ready for REST API development.

## ✨ Features

- ✅ ES Module (`"type": "module"`)
- ✅ Express v5
- ✅ `dotenv` environment variable management
- ✅ `cors` cross-origin resource sharing
- ✅ `nodemon` auto-reload for development
- ✅ ESLint code linting
- ✅ Clean project structure, easy to extend

## 📁 Project Structure

```
server/
├── src/
│   ├── server.js         # Application entry
│   ├── routes/           # API routes
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Helper functions
│   └── config/           # Configurations
├── .env                  # Environment variables (git ignored)
├── .gitignore
├── .eslintrc.json
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18

### 1. Clone & Install dependencies

```
git clone <your-repo-url>
cd server
npm install
```

### 2. Environment setup

Create `.env` file in root directory:

```
PORT=3000
NODE_ENV=development
```

### 3. Run dev server (hot reload)

```
npm run dev
```

Server runs on `[http://localhost:3000](http://localhost:3000)`

### 4. Start in production

```
npm run start
```

### 5. Lint code

```
npm run lint
```

### 6. Clean node_modules

```
npm run clean
```

## 📜 Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server with nodemon     |
| `npm run start` | Start production server with node |
| `npm run lint`  | ESLint check for `src/`           |
| `npm run clean` | Remove node_modules               |
| `npm test`      | Reserved for tests                |

## 🧪 API Example

`src/routes/demo.js`

```
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

Register route in `src/server.js`:

```
import demoRouter from './routes/demo.js';
app.use('/api', demoRouter);
```

- GET `[http://localhost:3000/api/hello](http://localhost:3000/api/hello)`
- POST `[http://localhost:3000/api/post](http://localhost:3000/api/post)`

## 🛡️ Middleware Examples

### 404 Handler

```
app.use((req, res) => {
  res.status(404).json({
    code: 404,
    message: 'API Not Found'
  });
});
```

### Global Error Handler

```
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    code: err.statusCode || 500,
    message: err.message || 'Internal Server Error'
  });
});
```

## ⚠️ Important Notes

1. This project uses **ESM**, file extensions `.js` cannot be omitted in `import`.
2. `.env` file **must not be committed to git**, add to `.gitignore`.
3. `__dirname` is not available in ESM. Use this snippet:

```
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

## 📦 Optional Extensions

Install as needed:

- `prisma` / `mongoose`: Database ORM/ODM
- `zod`: Request schema validation
- `jsonwebtoken`: JWT authentication
- `multer`: File upload
- `helmet`: Security headers
- `winston`: Logging
- `pm2`: Process manager for production

## 🚢 Production Deployment Recommendation

```
# Install pm2 globally
npm install -g pm2

# Start service
pm2 start src/server.js --name="express-server"

# View logs
pm2 logs express-server
```

Suggest to use Nginx as reverse proxy and enable HTTPS.

## 📄 License

[ISC](LICENSE)

