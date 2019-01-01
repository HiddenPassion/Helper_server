const addUniversity = {
  type: 'object',
  properties: {
    fullName: { type: 'string' },
    shortName: { type: 'string' },
  },
  required: ['fullName', 'shortName'],
};

module.exports = addUniversity;
