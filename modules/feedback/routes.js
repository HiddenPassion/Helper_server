const Router = require('koa-router');

const validation = require('../../utils/validator');
const {
  addFeedback,
  addFeedbackRating,
  updateFeedback,
  updateFeedbackRating,
} = require('../../utils/schemas');
const controller = require('./controller');
// const authController = require('../auth/authControllers');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/feedback' });

  routes

      .get('/', controller.getFeedbacks)
  // .use(authController.checkAuthUser)
  // .use(roles.can('admin'))
      .post('/', validation(addFeedback), controller.addFeedback)
      .post('/rating', validation(addFeedbackRating), controller.addFeedbackRating)
      .post(
          '/rating/:feedbackRatingId',
          validation(updateFeedbackRating),
          controller.updateFeedbackRating
      )
      .patch('/:feedbackId', validation(updateFeedback), controller.updateFeedback)
      .delete('/:feedbackId', controller.deleteFeedback);

  app.use(routes.routes());
};
