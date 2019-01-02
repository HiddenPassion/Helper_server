const { Material, MaterialData, sequelize } = require('../../models');
const Op = require('sequelize').Op;

const assignMaterialToSubject = async (subjectId, { name }, transaction) => {
  try {
    return await Material.create(
        {
          subject_id: subjectId,
          name,
        },
        {
          transaction,
        }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const addMaterialData = async (
  materialId,
  { url, name, extensionType, lecturerId, userId },
  transaction
) => {
  try {
    return await MaterialData.create(
        {
          material_id: materialId,
          url,
          name,
          extensionType,
          lecturer_id: lecturerId,
          user_id: userId,
        },
        {
          transaction,
        }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const getAssignedMaterialsToSubject = async (subjectId, { name }) => {
  try {
    return await Material.findAll({
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
  sequelize,
  addMaterialData,
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
};
