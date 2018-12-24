const Router = require('koa-router');

const { signIn, signUp } = require('../../utils/schemas');
const validation = require('../../utils/validator');
const authController = require('./authControllers');

module.exports = (app) => {
  const authRoutes = new Router({ prefix: '/auth' });

  authRoutes
      .post('/reg', validation(signUp), authController.userSignUp)
      .post('/login', validation(signIn), authController.userLogIn);

  app.use(authRoutes.routes());
};
