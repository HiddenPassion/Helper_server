const addLecturer = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
  },
  required: ['status'],
};

module.exports = addLecturer;
