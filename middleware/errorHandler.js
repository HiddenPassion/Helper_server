module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.message) {
      ctx.body = { error: err.message };
    }
    ctx.status = err.status || 500;
  }
};
