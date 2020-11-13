'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HasFamiliyUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HasFamiliyUser.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      HasFamiliyUser.belongsTo(models.User, {
        foreignKey: 'familiyMemberId',
        onDelete: 'CASCADE'
      })
    }
  };
  HasFamiliyUser.init({
    userId: DataTypes.INTEGER,
    familiyMemberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HasFamiliyUser',
  });
  return HasFamiliyUser;
};