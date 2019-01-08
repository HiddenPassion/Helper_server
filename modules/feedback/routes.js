const Router = require('koa-router');

const validation = require('../../utils/validator');
const {
  setFeedbackRating,
  updateFeedback,
  updateFeedbackRating,
} = require('../../utils/schemas');
const controller = require('./controller');
// const authController = require('../auth/authControllers');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/feedback' });

  routes
      .get('/rating/:feedbackId', controller.getFeedbackRating)
      .get('/rating/:feedbackId/:userId', controller.getFeedbackRatingStatus)
  // .use(authController.checkAuthUser)
  // .use(roles.can('admin'))
      .post('/rating', validation(setFeedbackRating), controller.setFeedbackRating)
      .post(
          '/rating/:feedbackRatingId',
          validation(updateFeedbackRating),
          controller.updateFeedbackRating
      )
      .patch('/:feedbackId', validation(updateFeedback), controller.updateFeedback)
      .delete('/:feedbackId', controller.deleteFeedback);

  app.use(routes.routes());
};
