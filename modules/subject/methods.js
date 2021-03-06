const { Subject, sequelize } = require('../../models');
const Op = require('sequelize').Op;

const assignSubjectToUniversity = async (universityId, { fullName, shortName }) => {
  try {
    return await Subject.create({
      universityId,
      fullName,
      shortName,
    });
  } catch (err) {
    throw new Error(err);
  }
};


const assignMaterialToSubject = async (subjectId, { fullName, shortName }) => {
  try {
    return await Material.create({
      subjectId,
      fullName,
      shortName,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAssignedSubjectsToUniversity = async (universityId, { fullName, shortName}) => {
  try {
    return await Subject.findAll({
      where: {
        universityId,
        fullName: { [Op.regexp]: fullName ? fullName : '' },
        shortName: { [Op.regexp]: shortName ? shortName : '' },
      },
      order: [
        ['fullName', 'ASC'],
      ],
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateSubject = async (subjectId, { fullName, shortName }) => {
  try {
    return await Subject.update({
      fullName,
      shortName,
    }, {
      where: { id: subjectId },
      returning: true,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  sequelize,
  assignSubjectToUniversity,
  assignMaterialToSubject,
  getAssignedSubjectsToUniversity,
  updateSubject,
};
