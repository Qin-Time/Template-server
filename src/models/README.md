# Models

数据模型层：定义 Schema、关联、索引。

## 选型建议

- **MySQL** → Prisma（推荐）或 Sequelize
- **MongoDB** → Mongoose
- **SQLite** → Prisma 或 Knex

## 命名约定

- 单文件单模型，文件名大驼峰：`User.js`、`Order.js`
- 汇总导出在 `index.js`

## 示例

```js
// models/User.js
module.exports = {
  findById: (id) => { /* ... */ },
  create: (data) => { /* ... */ },
};