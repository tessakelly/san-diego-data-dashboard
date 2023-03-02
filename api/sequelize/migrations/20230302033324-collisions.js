'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('collisions', {
      reportId: {
          type: Sequelize.DataTypes.TEXT,
          field: 'report_id',
          primaryKey: true
      },
      dateTime: {
          type: Sequelize.DataTypes.DATE,
          field: 'date_time'
      },
      policeBeat: {
          type: Sequelize.DataTypes.INTEGER,
          field: 'police_beat'
      },
      addressNoPrimary: {
          type: Sequelize.DataTypes.INTEGER,
          field: 'address_no_primary'
      },
      addressPdPrimary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_pd_primary'
      },
      addressRoadPrimary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_road_primary'
      },
      addressSfxPrimary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_sfx_primary'
      },
      addressPdIntersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_pd_intersecting'
      },
      addressNameIntersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_name_intersecting'
      },
      addressSfxIntersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_sfx_intersecting'
      },
      violationSection: {
          type: Sequelize.DataTypes.TEXT,
          field: 'violation_section'
      },
      violationType: {
          type: Sequelize.DataTypes.TEXT,
          field: 'violation_type'
      },
      chargeDesc: {
          type: Sequelize.DataTypes.TEXT,
          field: 'charge_desc'
      },
      injured: Sequelize.DataTypes.SMALLINT,
      killed: Sequelize.DataTypes.SMALLINT,
      hitRunLvl: {
          type: Sequelize.DataTypes.TEXT,
          field: 'hit_run_lvl'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('collisions');
  }
};
