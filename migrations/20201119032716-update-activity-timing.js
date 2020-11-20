module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('activities', 'timingmin', 'timing');
    await queryInterface.removeColumn('activities', 'timingmax');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('activities', 'timingmax', Sequelize.INTEGER);
    await queryInterface.renameColumn('activities', 'timing', 'timingmin');
  },
};
