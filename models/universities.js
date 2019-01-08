module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
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
  });

  University.associate = (models) => {
    models.University.hasMany(models.Subject, {
      foreignKey: 'university_id',
      sourceCode: 'id',
      onDelete: 'cascade',
      hooks: true,
    });
  };

  return University;
};
