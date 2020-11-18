'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ActivityTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Activities',
          key: 'id',
          as: 'activityId',
        }
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
          as: 'tagId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      uniqueKeys: {
          Items_unique: {
              fields: ['tagId', 'activityId'],
              unique: true
          }
      }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ActivityTags');
  }
};