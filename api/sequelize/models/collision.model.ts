import { Sequelize, DataTypes, Model } from 'sequelize';

export class Collision extends Model {

}

export default function(sequelize: Sequelize) {
    Collision.init({
        reportId: {
            type: DataTypes.TEXT,
            field: 'report_id'
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
        address_pd_primary: {
            type: DataTypes.TEXT,
            field: 'address_pd_primary'
        },
        address_road_primary: {
            type: DataTypes.TEXT,
            field: 'address_road_primary'
        },
        address_sfx_primary: {
            type: DataTypes.TEXT,
            field: 'address_sfx_primary'
        },
        address_pd_intersecting: {
            type: DataTypes.TEXT,
            field: 'address_pd_intersecting'
        },
        address_name_intersecting: {
            type: DataTypes.TEXT,
            field: 'address_name_intersecting'
        },
        address_sfx_intersecting: {
            type: DataTypes.TEXT,
            field: 'address_sfx_intersecting'
        },
        violation_section: {
            type: DataTypes.TEXT,
            field: 'violation_section'
        },
        violation_type: {
            type: DataTypes.TEXT,
            field: 'violation_type'
        },
        charge_desc: {
            type: DataTypes.TEXT,
            field: 'charge_desc'
        },
        injured: DataTypes.SMALLINT,
        killed: DataTypes.SMALLINT,
        hitRunLevel: {
            type: DataTypes.TEXT,
            field: 'hit_run_lvl'
        }
    }, {
        sequelize,
        tableName: 'collisions',
        timestamps: false
     });
}