module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ActivityMaterials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activityId: {
        type: Sequelize.INTEGER,
      },
      materialId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }, {
      uniqueKeys: {
        Items_unique: {
          fields: ['materialId', 'activityId'],
          unique: true,
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ActivityMaterials');
  },
};
