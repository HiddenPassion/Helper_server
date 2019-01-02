module.exports = (sequelize, DataTypes) => {
  const LecturerRating = sequelize.define('LecturerRating', {
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
  });

  LecturerRating.associate = (models) => {
    models.LecturerRating.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      targetKey: 'id',
    });

    models.LecturerRating.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };

  return LecturerRating;
};
