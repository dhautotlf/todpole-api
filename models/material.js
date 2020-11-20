const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Material.belongsToMany(
        models.Activity,
        {
          through: models.ActivityMaterial,
          as: 'materialList',
        },
      );
    }
  }
  Material.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
