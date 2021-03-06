const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Activity, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Bookmark, {
        foreignKey: 'userId',
      });
      /* User.belongsToMany(models.HasFamiliyUser, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      User.belongsToMany(models.HasFamiliyUser, {
        foreignKey: 'familymemberid',
        onDelete: 'CASCADE'
      }) */
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: DataTypes.STRING,
    photo: DataTypes.STRING,
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: {
      type: DataTypes.ENUM,
      values: ['MALE',
        'FEMALE',
        'UNSPECIFIED'],
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'TODDLER',
        'USER',
      ],
    },
    password: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: [
        'ACTIVATION_PENDING',
        'ACTIVE',
        'DISABLED',
      ],
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
