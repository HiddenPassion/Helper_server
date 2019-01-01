const Router = require('koa-router');

const validation = require('../../utils/validator');
const { addUniversity, updateUniversity } = require('../../utils/schemas');
// const cinemaController = require('./cinemaControllers');
// const additionController = require('./additionControllers');
// const roomController = require('../rooms/roomControllers');
const authController = require('../auth/authControllers');
const controller = require('./controller');
const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/university' });

  routes
      .get('/', controller.getUniversities)
      .get('/:id', controller.getUniversityById) // should be last in queue
      .use(authController.checkAuthUser)
      .use(roles.can('admin'))
      .post('/', validation(addUniversity), controller.addUniversity)
      .delete('/:id', controller.deleteUniversity)
      .patch('/:id', validation(updateUniversity), controller.updateUniversity);

  app.use(routes.routes());
};
