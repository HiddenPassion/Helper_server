const { Feedback, FeedbackRating, sequelize } = require('../../models');
// const Op = require('sequelize').Op;

const addFeedback = async ({ description, userId, lecturerId }) => {
  try {
    return await Feedback.create({
      userId,
      lecturerId,
      description,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateFeedback = async (feedbackId, { description }) => {
  try {
    return await Feedback.update({ description }, { where: { id: feedbackId }});
  } catch (err) {
    throw new Error(err);
  }
};

const deleteFeedback = async (feedbackId, transaction) => {
  try {
    return await Feedback.destroy({ where: { id: feedbackId } }, {transaction });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteAssignedFeedbackRatingsToFeedback = async (feedbackId, transaction) => {
  try {
    return await FeedbackRating.destroy({ where: { feedbackId } }, { transaction });
  } catch (err) {
    throw new Error(err);
  }
};

const addFeedbackRating = async ({ status, userId, feedbackId }) => {
  try {
    return await FeedbackRating.create({
      userId,
      feedbackId,
      status,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateFeedbackRating = async (feedbackRatingId, { status }) => {
  try {
    if (status === null || status === undefined) {
      return await FeedbackRating.destroy({where: { id: feedbackRatingId }});
    }
    return await FeedbackRating.update({ status }, { where: { id: feedbackRatingId } });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  sequelize,
  addFeedback,
  updateFeedback,
  deleteFeedback,
  deleteAssignedFeedbackRatingsToFeedback,
  addFeedbackRating,
  updateFeedbackRating,
};
