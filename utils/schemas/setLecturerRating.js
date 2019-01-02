const setLecturerRating = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    lecturerId: { type: 'string' },
    status: { type: 'lecturer' },
  },
  required: ['userId', 'lecturerId', 'status'],
};

module.exports = setLecturerRating;
