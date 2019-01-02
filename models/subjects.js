module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    fullName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'full_name',
    },
    shortName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'short_name',
    },
    universityId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'university_id',
    },
  });

  Subject.associate = (models) => {
    models.Subject.belongsTo(models.University, {
      foreignKey: 'university_id',
      targetKey: 'id',
    });

    models.Subject.hasMany(models.Material, {
      foreignKey: 'subject_id',
      targetKey: 'id',
    });
  };

  return Subject;
};
