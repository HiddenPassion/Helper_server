const Router = require('koa-router');

const validation = require('../../utils/validator');
const { addUniversity, updateUniversity, addSubject } = require('../../utils/schemas');
// const authController = require('../auth/authControllers');
const universityController = require('./controller');
const subjectController = require('../subject/controller');
// const roles = require('../../utils/roles');

module.exports = (app) => {
  const routes = new Router({ prefix: '/university' });

  routes
      .get('/', universityController.getUniversities)
      .get('/subjects/:universityId', subjectController.getAssignedSubjectsToUniversity)
      .get('/:universityId', universityController.getUniversityById) // should be last in queue
      // .use(authController.checkAuthUser)
      // .use(roles.can('admin'))
      .post('/', validation(addUniversity), universityController.addUniversity)
      .post(
          '/subject/:universityId',
          validation(addSubject),
          subjectController.assignSubjectToUniversity
      )
      .delete('/:universityId', universityController.deleteUniversity)
      .patch('/:universityId', validation(updateUniversity), universityController.updateUniversity);

  app.use(routes.routes());
};
