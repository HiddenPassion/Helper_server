const applyMiddleware = require('./middleware/applyMiddleware');
const authRoutes = require('./modules/auth/authRoutes');
const universityRoutes = require('./modules/university/routes');
const subjectRoutes = require('./modules/subject/routes');

require('./passport');

module.exports = (app) => {
  applyMiddleware(app);
  authRoutes(app);
  universityRoutes(app);
  subjectRoutes(app);
};
