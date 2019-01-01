const jwt = require('jsonwebtoken');
const passport = require('koa-passport');

const { jwtSecret } = require('config');
const db = require('./entityMethods');
const createUserData = require('../../utils/createUserData');
const errorMessage = require('../../utils/errorMessage');
const ERROR_MESSAGE = 'Something is not right';

const addBearerPrefix = (attachedString) => 'bearer ' + attachedString;

const generateToken = (data) =>
  addBearerPrefix(jwt.sign(createUserData(data), jwtSecret, { expiresIn: '1d' }));

const checkAuthUser = async (ctx, next) => {
  await passport.authenticate('jwt', async (err, user) => {
    if (!user || !err == null) {
      errorMessage.unauthorizedError();
    }

    ctx.state.user = user;

    await next();
  })(ctx, next);
};

const userSignUp = async (ctx) => {
  const userData = createUserData(ctx.request.body);

  try {
    const user = await db.createUser(userData, ctx.request.header.isadminapp);

    ctx.body = {
      token: generateToken(user),
      user,
    };
  } catch (err) {
    console.log(err);
    errorMessage.validationError();
  }
};

const userLogIn = async (ctx, next) => {
  await passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      errorMessage.unauthorizedError(ERROR_MESSAGE);
    }

    // if (ctx.request.header.isadminapp === `${user.isAdmin}`) {
    const token = generateToken(user);
    return (ctx.body = { user, token });
    // } else {
    //   errorMessage.forbiddenError();
    // }
  })(ctx, next);
};

module.exports = {
  userSignUp,
  userLogIn,
  checkAuthUser,
};
