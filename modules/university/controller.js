const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const addUniversity = async (ctx) => {
  try {
    await db.addUniversity(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.validationError();
  }
};

const getUniversities = async (ctx) => {
  try {
    const universities = await db.getUniversities(ctx.request.query);

    ctx.body = {
      universities,
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getUniversityById = async (ctx) => {
  try {
    const university = await db.getUniversityById(universityId);

    ctx.body = {
      university,
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const deleteUniversity = async (ctx) => {
  try {
    await db.deleteUniversity(ctx.params.universityId);
    // delete all connected data
    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateUniversity = async (ctx) => {
  try {
    await db.updateUniversity(ctx.params.universityId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

module.exports = {
  getUniversities,
  getUniversityById,
  addUniversity,
  deleteUniversity,
  updateUniversity,
};
