const { University } = require('../models/');
const Op = require('sequelize').Op;

const getUniversities = async ({ fullName, shortName }) => {
  try {
    return await University.findAll({
      where: {
        fullName: { [Op.regexp]: fullName ? fullName : '' },
        shortName: { [Op.regexp]: shortName ? shortName : '' },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
// attributes: ['name', 'address', 'city'],

const getUniversityById = async (id) => {
  try {
    return await University.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const addUniversity = async ({ fullName, shortName }) => {
  try {
    return await University.create({
      fullName,
      shortName,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUniversity = async (id) => {
  try {
    await University.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateUniversity = async (id, { fullName, shortName }) => {
  try {
    return await University.update(
        {
          fullName,
          shortName,
        },
        {
          where: { id },
        }
    );
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getUniversities,
  getUniversityById,
  addUniversity,
  deleteUniversity,
  updateUniversity,
};
