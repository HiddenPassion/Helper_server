module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
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
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patronymic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: 'image_url',
    },
  });

  Lecturer.associate = (models) => {
    models.Lecturer.hasMany(models.Material, {
      foreignKey: 'lecturer_id',
      sourceCode: 'id',
    });

    models.Lecturer.hasMany(models.LecturerRating, {
      foreignKey: 'lecturer_id',
      sourceCode: 'id',
    });

    models.Lecturer.hasMany(models.Feedback, {
      foreignKey: 'lecturer_id',
      sourceCode: 'id',
    });
  };

  return Lecturer;
};
