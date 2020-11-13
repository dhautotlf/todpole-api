'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivityImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ActivityImage.belongsTo(models.Activity, {
        foreignKey: 'activityId',
        onDelete: 'CASCADE'
      })
    }
  };
  ActivityImage.init({
    activityId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    isMain: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ActivityImage',
  });
  return ActivityImage;
};