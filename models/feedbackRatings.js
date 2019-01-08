module.exports = (sequelize, DataTypes) => {
  const FeedbackRating = sequelize.define('FeedbackRating', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
    },
    feedbackId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'feedback_id',
    },
  });

  FeedbackRating.associate = (models) => {
    models.FeedbackRating.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });

    models.FeedbackRating.belongsTo(models.Feedback, {
      foreignKey: 'feedback_id',
      targetKey: 'id',
    });
  };

  return FeedbackRating;
};
