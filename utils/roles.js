const Roles = require('koa-roles');
const errorMessage = require('./errorMessage');

const roles = new Roles({
  async failureHandler(ctx, action) {
    errorMessage.forbiddenError();
  },
});

roles.use('admin', (ctx) => {
  return ctx.state.user.dataValues.isAdmin;
});

roles.use('user', (ctx) => {
  return !ctx.state.user.dataValues.isAdmin;
});

module.exports = roles;
