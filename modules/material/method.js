const { Subject } = require('../models/');
const Op = require('sequelize').Op;

const assignMaterialToSubject = async (subjectId, { fullName, shortName }) => {
  try {
    return await Subject.create({
      subject_id: subjectId,
      fullName,
      shortName,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAssignedMaterialsToSubject = async (subjectId, { name }) => {
  try {
    return await Subject.findAll({
      where: {
        subject_id: subjectId,
        name: { [Op.regexp]: name ? name : '' },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
};
