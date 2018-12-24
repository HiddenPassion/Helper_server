const applyMiddleware = require('./middleware/applyMiddleware');
const authRoutes = require('./modules/auth/authRoutes');

require('./passport');

module.exports = (app) => {
  applyMiddleware(app);
  authRoutes(app);
};
