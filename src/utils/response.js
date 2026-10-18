// 统一响应格式
// 成功：{ code: 0, message, data }
// 失败：由 errorHandler 统一处理
export function ok(res, data = null, message = 'ok') {
  res.status(200).json({ code: 0, message, data });
}

export function created(res, data = null, message = 'created') {
  res.status(201).json({ code: 0, message, data });
}

export function noContent(res) {
  res.status(204).end();
}
