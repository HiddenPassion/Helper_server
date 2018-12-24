const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const { jwtSecret } = require('config');
const { User } = require('../models');

const localOptions = { usernameField: 'email' };

passport.use(
    new LocalStrategy(localOptions, async (email, password, cb) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
          return cb(null, false, { message: 'User with such email doesn\'t exist.' });
        }

        user.comparePassword(password, function(err, isMatch) {
          if (err) {
            return cb(err);
          }
          if (!isMatch) {
            return cb(null, false, { error: 'Invalid passport' });
          }
          return cb(null, user);
        });
      } catch (err) {
        return cb(err);
      }
    })
);

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
    'jwt',
    new JWTStrategy(jwtOptions, async (jwtPayload, cb) => {
      try {
        const user = await User.findById(jwtPayload.id);

        if (user) {
          return cb(null, user);
        } else {
          cb(null, false);
        }
      } catch (err) {
        return cb(err);
      }
    })
);
