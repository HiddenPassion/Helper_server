const updateLecturerRating = {
  type: 'object',
  properties: {
    status: { type: 'string' },
  },
  required: ['status'],
};

module.exports = updateLecturerRating;
