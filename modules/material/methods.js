const { Material, MaterialData, MaterialRating, sequelize } = require('../../models');
const Op = require('sequelize').Op;

const assignMaterialToSubject = async (subjectId, { name, lecturerId, userId }, transaction) => {
  try {
    return await Material.create(
        {
          subjectId,
          lecturerId,
          userId,
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
          // model: MaterialData,
          all: true,
          // nested: true,
        },
      ],
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateMaterial = async (materialId, { name }) => {
  try {
    return await Material.update({
      name,
    }, {
      where: { id: materialId },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteMaterialData = async (materialData) => {
  try {
    return await MaterialData.destroy({ where: { id: materialId } });
  } catch (err) {
    throw new Error(err);
  }
};

const setMaterialRating = async ({ userId, materialId, status }) => {
  try {
    return await MaterialRating.create({
      userId,
      materialId,
      status,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateMaterialRating = async (materialRatingId, { status }) => {
  try {
    if (status === null || status === undefined ) {
      return await MaterialRating.destroy({ where: { id: materialRatingId } });
    }
    return await MaterialRating.update({
      status,
    }, {
      where: { id: materialRatingId },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getMaterialRatingStatus = async (materialId, userId) => {
  try {
    return await MaterialRating.findOne({ where: { materialId, userId }});
  } catch (err) {
    throw new Error(err);
  }
};

const getMaterialRating = async (materialId) => {
  try {
    const positiveRating = await MaterialRating.findAndCountAll({
      where: {
        materialId,
        status: true,
      },
    });
    
    const negativeRating = await MaterialRating.findAndCountAll({
      where: {
        materialId,
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

module.exports = {
  sequelize,
  addMaterialData,
  getMaterialData,
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
  updateMaterial,
  deleteMaterialData,
  setMaterialRating,
  updateMaterialRating,
  getMaterialRating,
  getMaterialRatingStatus,
};
