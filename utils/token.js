const jwt = require('jsonwebtoken');
const config = require('config');

const getUserDataFromToken = (ctx) => {
  const token = ctx.request.header.authorization.split(' ')[1];
  return jwt.verify(token, config.jwtSecret);
};

module.exports = getUserDataFromToken;
