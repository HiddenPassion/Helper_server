module.exports = (sequelize, DataTypes) => {
  const MaterialData = sequelize.define('MaterialData', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extensionType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'extension_type',
    },
  });

  MaterialData.associate = (models) => {
    models.MaterialData.belongsTo(models.Material, {
      foreignKey: 'material_id',
      targetKey: 'id',
    });
  };

  return MaterialData;
};
