const setFeedbackRating = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    feedbackId: { type: 'string' },
    status: { type: 'boolean' },
  },
  required: ['userId', 'feedbackId', 'status'],
};

module.exports = setFeedbackRating;
