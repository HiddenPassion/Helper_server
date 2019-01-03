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

const getLecturerRatingStatus = async (ctx) => {
  try {
    const lecturerRating = await db.getLecturerRatingStatus(
        ctx.params.lecturerId,
        ctx.params.userId
    );

    ctx.body = {
      userLecturerRating: {
        status: lecturerRating.status,
      },
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getLecturerRating = async (ctx) => {
  try {
    const lecturerRating = await db.getLecturerRating(ctx.params.lecturerId);

    ctx.body = {
      lecturerRating,
    };  
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getLecturersByUniversities = async (ctx) => {
  try {
    const lecturers = await db.getLecturersByUniversities(ctx.params.universityId);

    ctx.body = {
      lecturers,
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

// delete lecturer and allAssign

module.exports = {
  addLecturer,
  setLecturerRating,
  updateLecturer,
  updateLecturerRating,
  getLecturer,
  getLecturerRating,
  getLecturerRatingStatus,
  getLecturersByUniversities,
};
