const db = require('./methods');
const errorMessage = require('../../utils/errorMessage');

const assignMaterialToSubject = async (ctx) => {
  let transaction;
  try {
    transaction = await db.sequelize.transaction();

    const { id } = await db.assignMaterialToSubject(
        ctx.params.subjectId,
        ctx.request.body,
        transaction
    );
    const { data } = ctx.request.body;
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error();
    }

    for (let i = 0; i < data.length; i++) {
      await db.addMaterialData(id, data[i], transaction);
    }

    await transaction.commit();
    ctx.body = {};
  } catch (err) {
    transaction.rollback();
    errorMessage.internalServerError();
  }
};

const getAssignedMaterialsToSubject = async (ctx) => {
  try {
    const materials = await db.getAssignedMaterialsToSubject(
        ctx.params.subjectId,
        ctx.request.query
    );
    // add materailData, lecturer
    ctx.body = {
      materials,
    };
  } catch (err) {
    console.log(err);
    errorMessage.internalServerError();
  }
};

const updateMaterial = async (ctx) => {
  try {
    await db.updateMaterial(ctx.params.materialId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const deleteMaterialData = async (ctx) => {
  try {
    await db.deleteMaterialData(ctx.params.materialData);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const setMaterialRating = async (ctx) => {
  try {
    await db.setMaterialRating(ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const updateMaterialRating = async (ctx) => {
  try {
    await db.updateMaterialRating(ctx.params.materialRatingId, ctx.request.body);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getMaterialRatingStatus = async (ctx) => {
  try {
    const materialRating = await db.getMaterialRatingStatus(
        ctx.params.materialId,
        ctx.params.userId
    );

    ctx.body = {
      userMaterialRating: {
        status: materialRating.status,
      },
    };
  } catch (err) {
    errorMessage.internalServerError();
  }
};

const getMaterialRating = async (ctx) => {
  try {
    const materialRating = await db.getMaterialRating(ctx.params.materialId);

    ctx.body = {
      materialRating,
    };  
  } catch (err) {
    errorMessage.internalServerError();
  }
};

// delete and all connected(material, materiaRating, materialData)

module.exports = {
  updateMaterial,
  deleteMaterialData,
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
  setMaterialRating,
  updateMaterialRating,
  getMaterialRatingStatus,
  getMaterialRating,
};
