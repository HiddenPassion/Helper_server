const Router = require('koa-router');

const validation = require('../../utils/validator');
const {
  addFeedback,
  updateLecturer,
  setLecturerRating,
  updateLecturerRating,
} = require('../../utils/schemas');
const controller = require('./controller');
const feedbackController = require('../feedback/controller');
// const authController = require('../auth/authControllers');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/lecturer' });

  routes
      .get('/:lecturerId', controller.getLecturer)
      .get('/feedbacks/:lecturerId', feedbackController.getFeedbacks)
      .get('/rating/:lecturerId', controller.getLecturerRating)
      .get('/rating/:lecturerId/:userId', controller.getLecturerRatingStatus)
  // .use(authController.checkAuthUser)
  // .use(roles.can('admin'))
      .post('/rating', validation(setLecturerRating), controller.setLecturerRating)
      .post('/feedback/:lecturerId', validation(addFeedback), feedbackController.addFeedback)
      .patch(
          'rating/:lecturerRatingId',
          validation(updateLecturerRating),
          controller.updateLecturerRating
      )
      .patch('/:lecturerId', validation(updateLecturer), controller.updateLecturer);

  app.use(routes.routes());
};
