const { Lecturer, LecturerRating, sequelize } = require('../../models');
// const Op = require('sequelize').Op;

const addLecturer = async ({ name, surname, patronymic, description, imageUrl }) => {
  try {
    return await Lecturer.create(
        {
          name,
          surname,
          patronymic,
          description,
          imageUrl,
        },
    );
  } catch (err) {
    throw new Error(err);
  }
};

const setLecturerRating = async ({ userId, lecturerId, status }) => {
  try {
    return await LecturerRating.create({
      userId,
      lecturerId,
      status,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateLecturerRating = async (lecturerRatingId, { userId, status }) => {
  try {
    if (status === null) {
      return await LecturerRating.destroy({ where: { id: lecturerRatingId } });
    }
    return await LecturerRating.update({ status, userId }, { where: { id: lecturerRatingId } });
  } catch (err) {
    throw new Error(err);
  }
};

const updateLecturer = async (id, { name, surname, patronymic, description, imageUrl }) => {
  try {
    return await Lecturer.update({
      name,
      surname,
      patronymic,
      description,
      imageUrl,
    }, {
      where: { id },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getLecturer = async (id) => {
  try {
    return await Lecturer.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const getLecturerRatingStatus = async (lecturerId, userId) => {
  try {
    return await LecturerRating.findOne({ where: { lecturerId, userId }});
  } catch (err) {
    throw new Error(err);
  }
};

const getLecturerRating = async (feedbackId) => {
  try {
    const positiveRating = await LecturerRating.findAndCountAll({
      where: {
        lecturerId,
        status: true,
      },
    });
    
    const negativeRating = await LecturerRating.findAndCountAll({
      where: {
        lecturerId,
        status: false,
      },
    });
    
    return {
      value: (positiveRating.count - negativeRating.count) || 0,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const getQuery = (universityId) => (
  `SELECT DISTINCT "L"."id", "L"."name", "L"."surname",
    "L"."patronymic", "L"."description", "L"."image_url"
  FROM "Universities" as "U"
  INNER JOIN "Subjects" as "S" ON "U"."id" = "S"."university_id"
  INNER JOIN "Materials" as "M" ON "S"."id" = "M"."subject_id"
  INNER JOIN "Lecturers" as "L" ON "M"."lecturer_id" = "L"."id"
  WHERE "U"."id" = '${universityId}'`
);

const getLecturersByUniversities = async (universityId) => {
  try {
    const lecturers = await sequelize.query(getQuery(universityId));
    return lecturers[0];
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  addLecturer,
  updateLecturer,
  getLecturer,
  setLecturerRating,
  updateLecturerRating,
  getLecturerRating,
  getLecturerRatingStatus,
  getLecturersByUniversities,
};
