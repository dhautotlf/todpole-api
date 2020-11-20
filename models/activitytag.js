const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActivityTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ActivityTag.init({
    activityId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ActivityTag',
  });
  return ActivityTag;
};
