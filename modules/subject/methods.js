const { Subject, sequelize } = require('../../models');
const Op = require('sequelize').Op;

const assignSubjectToUniversity = async (universityId, { fullName, shortName }) => {
  try {
    return await Subject.create({
      university_id: universityId,
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
      subject_id: subjectId,
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
        university_id: universityId,
        fullName: { [Op.regexp]: fullName ? fullName : '' },
        shortName: { [Op.regexp]: shortName ? shortName : '' },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateSubject = async (id, { fullName, shortName }) => {
  try {
    return await Subject.update({
      fullName,
      shortName,
    }, {
      where: { id },
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
