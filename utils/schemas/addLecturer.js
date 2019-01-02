const addLecturer = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    surname: { type: 'string' },
    patronymic: { type: 'string' },
    description: { type: 'string' },
    imageUrl: { type: 'string' },
  },
  required: ['name', 'surname', 'patronymic'],
};

module.exports = addLecturer;
