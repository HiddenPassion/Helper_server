const Router = require('koa-router');

const validation = require('../../utils/validator');
const {
  addLecturer,
  updateLecturer,
  setLecturerRating,
  updateLecturerRating,
} = require('../../utils/schemas');
const controller = require('./controller');
// const authController = require('../auth/authControllers');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/lecturer' });

  routes

      .get('/:lecturerId', controller.getLecturer)
  // .use(authController.checkAuthUser)
  // .use(roles.can('admin'))
      .post('/', validation(addLecturer), controller.addLecturer)
      .post('/rating', validation(setLecturerRating), controller.setLecturerRating)
      .patch('rating/:userId', validation(updateLecturerRating), controller.updateLecturerRating)
      .patch('/:lecturerId', validation(updateLecturer), controller.updateLecturer);

  app.use(routes.routes());
};
