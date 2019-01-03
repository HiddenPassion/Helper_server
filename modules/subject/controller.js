const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const assignSubjectToUniversity = async (ctx) => {
  try {
    await db.assignSubjectToUniversity(ctx.params.universityId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getAssignedSubjectsToUniversity = async (ctx) => {
  try {
    await db.getAssignedSubjectsToUniversity(ctx.params.universityId, ctx.request.query);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateSubject = async (ctx) => {
  try {
    await db.updateSubject(ctx.params.subjectId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

// delete subject add all assigned data

module.exports = {
  assignSubjectToUniversity,
  getAssignedSubjectsToUniversity,
  updateSubject,
};
