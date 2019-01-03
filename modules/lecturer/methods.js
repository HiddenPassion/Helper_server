const { Lecturer, LecturerRating } = require('../../models');
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

module.exports = {
  addLecturer,
  updateLecturer,
  getLecturer,
  setLecturerRating,
  updateLecturerRating,
};
