module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('users', 'status', {
      type: Sequelize.ENUM,
      values: [
        'ACTIVATION_PENDING',
        'ACTIVE',
        'DISABLED',
      ],
      defaultValue: 'ACTIVATION_PENDING',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'status');
  },
};