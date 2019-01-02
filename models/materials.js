module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
    },
    lecturerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'lecturer_id',
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id',
    },
  });

  Material.associate = (models) => {
    models.Material.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      targetKey: 'id',
    });

    models.Material.belongsTo(models.Subject, {
      foreignKey: 'subject_id',
      targetKey: 'id',
    });

    models.Material.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });

    models.Material.hasMany(models.MaterialData, {
      foreignKey: 'material_id',
      sourceCode: 'id',
    });

    models.Material.hasMany(models.MaterialRating, {
      foreignKey: 'material_id',
      targetKey: 'id',
    });
  };

  return Material;
};
