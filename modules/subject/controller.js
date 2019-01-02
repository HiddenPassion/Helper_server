const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const assignSubjectToUniversity = async (ctx) => {
  try {
    db.assignSubjectToUniversity(ctx.params.universityId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getAssignedSubjectsToUniversity = async (ctx) => {
  try {
    db.getAssignedSubjectsToUniversity(ctx.params.universityId, ctx.request.query);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateSubject = async (ctx) => {
  try {
    db.updateSubject(ctx.params.subjectId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

module.exports = {
  assignSubjectToUniversity,
  getAssignedSubjectsToUniversity,
  updateSubject,
};
