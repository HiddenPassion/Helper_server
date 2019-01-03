const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const addFeedback = async (ctx) => {
  try {
    await db.addFeedback(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateFeedback = async (ctx) => {
  try {
    await db.updateFeedback(ctx.params.feedbackId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const deleteFeedback = async (ctx) => {
  let transaction;
  try {
    transaction = db.sequelize.transaction();
    await db.deleteAssignedFeedbackRatingsToFeedback(ctx.params.feedbackId, transaction);
    await db.deleteFeedback(ctx.params.feedbackId, ctx.request.body, transaction);
    transaction.commit();
    ctx.body = {};
  } catch (err) {
    transaction.rollback();
    errorMessage.internalServerError();
  }
};

const setFeedbackRating = async (ctx) => {
  try {
    await db.setFeedbackRating(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateFeedbackRating = async (ctx) => {
  try {
    await db.updateFeedbackRating(ctx.params.feedbackRatingId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getFeedbacks = async (ctx) => {
  try {
    const feedbacks = await db.getFeedbacks(ctx.params.lecturerId);

    ctx.body = {
      feedbacks,
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getFeedbackRatingStatus = async (ctx) => {
  try {
    const feedbackRating = await db.getFeedbackRatingStatus(
        ctx.params.feedbackId,
        ctx.params.userId
    );

    ctx.body = {
      userFeedbackRating: {
        status: feedbackRating.status,
      },
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getFeedbackRating = async (ctx) => {
  try {
    const feedbackRating = await db.getFeedbackRating(ctx.params.feedbackId);

    ctx.body = {
      feedbackRating,
    };  
  } catch (err) {
    errorMessage.internalServerError();
  }
};

module.exports = {
  addFeedback,
  setFeedbackRating,
  updateFeedback,
  updateFeedbackRating,
  deleteFeedback,
  getFeedbacks,
  getFeedbackRating,
  getFeedbackRatingStatus,
};
