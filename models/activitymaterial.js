const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActivityMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ActivityMaterial.init({
    activityId: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ActivityMaterial',
  });
  return ActivityMaterial;
};
