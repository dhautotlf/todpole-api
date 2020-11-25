const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        as: 'user',
      });

      Review.belongsTo(models.Activity, {
        foreignKey: 'activityId',
        onDelete: 'CASCADE',
      });
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    activityId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
