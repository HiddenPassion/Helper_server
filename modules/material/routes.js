const Router = require('koa-router');

const validation = require('../../utils/validator');
const { updateMaterialRating, setMaterialRating } = require('../../utils/schemas');
const controller = require('./controller');
// const authController = require('../auth/authControllers');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/material' });

  routes
  // .use(authController.checkAuthUser)
  // .use(roles.can('admin'))
      .get('/rating/:materialId', controller.getMaterialRating)
      .get('/rating/:materialId/:userId', controller.getMaterialRatingStatus)
      .post('/rating', validation(setMaterialRating), controller.setMaterialRating)
      .patch(
          '/rating/:materialRatingId',
          validation(updateMaterialRating),
          controller.updateMaterial,
      );

  app.use(routes.routes());
};
