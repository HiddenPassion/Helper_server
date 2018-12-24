const signUpSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
    email: { type: 'string', format: 'email' },
  },
  required: ['username', 'password', 'email'],
};

module.exports = signUpSchema;
