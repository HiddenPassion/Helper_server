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
    await db.getAssignedMaterialsToSubject(ctx.params.subjectId, ctx.request.query);

    ctx.body = {};
  } catch (err) {
    errorMessage.internalServerError();
  }
};

module.exports = {
  assignMaterialToSubject,
  getAssignedMaterialsToSubject,
};
