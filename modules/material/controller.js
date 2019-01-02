const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const assignMaterialToSubject = async (ctx) => {
  try {
    db.assignSubjectToUniversity(ctx.params.subjectId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getAssignedMaterialsToSubject = async (ctx) => {
  try {
    db.getAssignedMaterialsToSubject(ctx.params.subjectId, ctx.request.query);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

module.exports = {
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
};
