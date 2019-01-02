module.exports = (sequelize, DataTypes) => {
  const MaterialRating = sequelize.define('MaterialRating', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
    },
  });

  MaterialRating.associate = (models) => {
    models.MaterialRating.belongsTo(models.Material, {
      foreignKey: 'material_id',
      targetKey: 'id',
    });

    models.MaterialRating.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };

  return MaterialRating;
};
