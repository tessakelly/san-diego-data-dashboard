import { Sequelize, DataTypes, Model } from 'sequelize';

export class Collision extends Model {

}

export default function(sequelize: Sequelize) {
    Collision.init({
        reportId: {
            type: DataTypes.TEXT,
            field: 'report_id',
            primaryKey: true
        },
        dateTime: {
            type: DataTypes.DATE,
            field: 'date_time'
        },
        policeBeat: {
            type: DataTypes.INTEGER,
            field: 'police_beat'
        },
        addressNoPrimary: {
            type: DataTypes.INTEGER,
            field: 'address_no_primary'
        },
        addressPdPrimary: {
            type: DataTypes.TEXT,
            field: 'address_pd_primary'
        },
        addressRoadPrimary: {
            type: DataTypes.TEXT,
            field: 'address_road_primary'
        },
        addressSfxPrimary: {
            type: DataTypes.TEXT,
            field: 'address_sfx_primary'
        },
        addressPdIntersecting: {
            type: DataTypes.TEXT,
            field: 'address_pd_intersecting'
        },
        addressNameIntersecting: {
            type: DataTypes.TEXT,
            field: 'address_name_intersecting'
        },
        addressSfxIntersecting: {
            type: DataTypes.TEXT,
            field: 'address_sfx_intersecting'
        },
        violationSection: {
            type: DataTypes.TEXT,
            field: 'violation_section'
        },
        violationType: {
            type: DataTypes.TEXT,
            field: 'violation_type'
        },
        chargeDesc: {
            type: DataTypes.TEXT,
            field: 'charge_desc'
        },
        injured: DataTypes.SMALLINT,
        killed: DataTypes.SMALLINT,
        hitRunLvl: {
            type: DataTypes.TEXT,
            field: 'hit_run_lvl'
        }
    }, {
        sequelize,
        tableName: 'collisions',
        timestamps: false
     });
}