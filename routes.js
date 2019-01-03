const applyMiddleware = require('./middleware/applyMiddleware');
const authRoutes = require('./modules/auth/authRoutes');
const universityRoutes = require('./modules/university/routes');
const subjectRoutes = require('./modules/subject/routes');
const lecturerRoutes = require('./modules/lecturer/routes');
const materialRoutes = require('./modules/material/routes');

require('./passport');

module.exports = (app) => {
  applyMiddleware(app);
  authRoutes(app);
  universityRoutes(app);
  subjectRoutes(app);
  lecturerRoutes(app);
  materialRoutes(app);
};
