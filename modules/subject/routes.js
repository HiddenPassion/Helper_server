const Router = require('koa-router');

const validation = require('../../utils/validator');
const { addMaterial, updateSubject } = require('../../utils/schemas');
// const authController = require('../auth/authControllers');
const controller = require('./controller');
const materialController = require('../material/controller');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/subjects' });

  routes
      .get('/materials/:subjectId', materialController.getAssignedMaterialsToSubject)
      // .use(authController.checkAuthUser)
      // .use(roles.can('admin'))
      .post(
          '/material/:subjectId',
          validation(addMaterial),
          materialController.assignMaterialToSubject
      )
      .patch('/:subjectId', validation(updateSubject), controller.updateSubject);

  app.use(routes.routes());
};
