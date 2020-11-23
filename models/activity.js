const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        as: 'user',
      });
      Activity.hasMany(models.Review, {
        foreignKey: 'activityId',
        as: 'reviewList',
      });
      Activity.hasMany(models.ActivityImage, {
        foreignKey: 'activityId',
        as: 'activityImageList',
      });
      Activity.hasMany(models.Bookmark, {
        foreignKey: 'userId',
      });
      Activity.belongsToMany(
        models.Tag,
        {
          through: models.ActivityTag,
          as: 'tagList',
        },
      );
      Activity.belongsToMany(
        models.Material,
        {
          through: models.ActivityMaterial,
          as: 'materialList',
        },
      );
    }
  }

  Activity.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.ENUM,
      values: ['PHYSICAL', 'COGNITIVE', 'SPEECH', 'SOCIAL_EMOTION', 'SELF_CARE'],
    },
    name: DataTypes.STRING,
    ageMin: DataTypes.INTEGER,
    ageMax: DataTypes.INTEGER,
    timing: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    averageRating: DataTypes.NUMERIC,
  }, {
    sequelize,
    modelName: 'Activity',
    ageMin: DataTypes.INTEGER,
  });
  return Activity;
};
