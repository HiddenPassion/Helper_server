const addFeedback = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['userId', 'description'],
};

module.exports = addFeedback;
