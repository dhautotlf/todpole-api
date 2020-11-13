'use strict';

/*
User creation - User
id
photo
name
birth date
gender (male / female / unspecified)
email
password
type (user/toddler)
userList
bookmarkList
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.ENUM,
        values: [
          'MALE',
          'FEMALE',
          'UNSPECIFIED'
        ],
        defaultValue: 'MALE'
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values: [
          'TODDLER',
          'USER',
        ],
        defaultValue: 'USER'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_type";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_gender";');
  }
};