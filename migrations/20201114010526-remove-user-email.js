module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'email');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
    });
  },
};
