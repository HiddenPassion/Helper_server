const { Material, MaterialData, sequelize } = require('../../models');
const Op = require('sequelize').Op;

const assignMaterialToSubject = async (subjectId, { name }, transaction) => {
  try {
    return await Material.create(
        {
          subjectId,
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
          materialId,
          url,
          name,
          extensionType,
          lecturerId,
          userId,
        },
        {
          transaction,
        }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const getMaterialData = async (id) => {
  try {
    return await MaterialData.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const getAssignedMaterialsToSubject = async (subjectId, { name }) => {
  try {
    return await Material.findAll({
      where: {
        subjectId,
        name: { [Op.regexp]: name ? name : '' },
      },
      include: [
        {
          model: Material,
        },
      ],
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  sequelize,
  addMaterialData,
  getMaterialData,
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
};
