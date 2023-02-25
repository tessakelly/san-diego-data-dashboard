'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('indicator_bacteria_tests', {
      frNum: {
        type: Sequelize.INTEGER,
        field: 'FR_NUM'
      },
      dateSampled: {
          type: Sequelize.DataTypes.DATEONLY,
          field: 'date_sampled'
      },
      source: {
          type: Sequelize.TEXT,
          field: 'source'
      },
      sampleId: {
          type: Sequelize.TEXT,
          field: 'sample_id'
      },
      tColiform: {
          type: Sequelize.BOOLEAN,
          field: 't_coliform'
      },
      cl2Total: {
          type: Sequelize.DECIMAL,
          field: 'cl2_total',
      },
      eColi: {
          type: Sequelize.BOOLEAN,
          field: 'e_coli'
      },
      temperature: {
          type: Sequelize.DECIMAL,
          field: 'temperature'
      },
      ph: {
          type: Sequelize.DECIMAL,
          field: 'ph'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('indicator_bacteria_tests');
  }
};
