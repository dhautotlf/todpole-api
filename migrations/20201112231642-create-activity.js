/*
imageList (jsonb)
name (text)
category [PHYSICAL, COGNITIVE, SPEECH, SOCIAL_EMOTION, SELF_CARE] enum
age_min (integer)
age_max (integer)
timing_min (integer)
timing_max (integer)
material [string] enum
description (text)
url (text)
reviewList [Review]
tag [string]
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
      category: {
        type: Sequelize.ENUM,
        values: [
          'PHYSICAL', 'COGNITIVE', 'SPEECH', 'SOCIAL_EMOTION', 'SELF_CARE',
        ],
      },
      name: {
        type: Sequelize.STRING,
      },
      ageMin: {
        type: Sequelize.INTEGER,
      },
      ageMax: {
        type: Sequelize.INTEGER,
      },
      timingMin: {
        type: Sequelize.INTEGER,
      },
      timingMax: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // Material is missing
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Activities');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Activities_category";');
  },
};
