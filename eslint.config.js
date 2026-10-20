// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // 注入 Node.js 的全局变量（如 process, __dirname 等）
      },
    },
    rules: {
      // 这里可以根据你的喜好覆盖规则
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 允许以 _ 开头的未使用参数
      'no-console': 'off', // 后端项目通常需要 console
    },
  },
];