'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('collisions', {
      reportId: {
          type: Sequelize.DataTypes.TEXT,
          field: 'report_id'
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
      address_pd_primary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_pd_primary'
      },
      address_road_primary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_road_primary'
      },
      address_sfx_primary: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_sfx_primary'
      },
      address_pd_intersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_pd_intersecting'
      },
      address_name_intersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_name_intersecting'
      },
      address_sfx_intersecting: {
          type: Sequelize.DataTypes.TEXT,
          field: 'address_sfx_intersecting'
      },
      violation_section: {
          type: Sequelize.DataTypes.TEXT,
          field: 'violation_section'
      },
      violation_type: {
          type: Sequelize.DataTypes.TEXT,
          field: 'violation_type'
      },
      charge_desc: {
          type: Sequelize.DataTypes.TEXT,
          field: 'charge_desc'
      },
      injured: Sequelize.DataTypes.SMALLINT,
      killed: Sequelize.DataTypes.SMALLINT,
      hitRunLevel: {
          type: Sequelize.DataTypes.TEXT,
          field: 'hit_run_lvl'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('collisions');
  }
};
