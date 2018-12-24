const signInSchema = {
  type: 'object',
  properties: {
    password: { type: 'string' },
    email: { type: 'string', format: 'email' },
  },
  required: ['email', 'password'],
};

module.exports = signInSchema;
