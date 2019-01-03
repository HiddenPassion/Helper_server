const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const addLecturer = async (ctx) => {
  try {
    await db.addLecturer(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const setLecturerRating = async (ctx) => {
  try {
    await db.setLecturerRating(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateLecturerRating = async (ctx) => {
  try {
    await db.updateLecturerRating(ctx.params.lecturerRatingId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateLecturer = async (ctx) => {
  try {
    await db.updateLecturer(ctx.params.lecturerId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getLecturer = async (ctx) => {
  try {
    const lecturer = await db.getLecturer(ctx.params.lecturerId);
  
    ctx.body = {
      lecturer,
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

// delete lecturer and allAssign
// getLecturersAssignToUniversity
// getLecturersAssignToSubject
// delete lecturerRating
// get rating count
// get rating status

module.exports = {
  addLecturer,
  setLecturerRating,
  updateLecturer,
  updateLecturerRating,
  getLecturer,
};
