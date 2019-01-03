const setMaterialRating = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    materialId: { type: 'string' },
    status: { type: 'lecturer' },
  },
  required: ['userId', 'materialId', 'status'],
};

module.exports = setMaterialRating;
