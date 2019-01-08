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
    name: {
      type: DataTypes.STRING,
    },
    extensionType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'extension_type',
    },
    materialId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'material_id',
    },
  });

  MaterialData.beforeCreate((materialData, option) => {
    return new Promise((resolve, reject) => {
      if (!materialData.name) {
        materialData.name = Math.random().toString(36).substr(2, 9);
      }
      resolve(materialData);
    });
  });

  MaterialData.associate = (models) => {
    models.MaterialData.belongsTo(models.Material, {
      foreignKey: 'material_id',
      targetKey: 'id',
    });
  };

  return MaterialData;
};
