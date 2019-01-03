const addFeedback = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    lecturerId: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['userId', 'lecturerId', 'description'],
};

module.exports = addFeedback;
