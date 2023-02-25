import { Sequelize, DataTypes, Model } from 'sequelize';

export class IndicatorBacteriaTest extends Model {

}

export default function(sequelize: Sequelize) {
    IndicatorBacteriaTest.init({
        frNum: {
            type: DataTypes.INTEGER,
            field: 'FR_NUM'
        },
        dateSampled: {
            type: DataTypes.DATE,
            field: 'date_sampled'
        },
        source: {
            type: DataTypes.TEXT,
            field: 'source'
        },
        sampleId: {
            type: DataTypes.TEXT,
            field: 'sample_id',
            primaryKey: true
        },
        tColiform: {
            type: DataTypes.BOOLEAN,
            field: 't_coliform'
        },
        cl2Total: {
            type: DataTypes.NUMBER,
            field: 'cl2_total'
        },
        eColi: {
            type: DataTypes.BOOLEAN,
            field: 'e_coli'
        },
        temperature: {
            type: DataTypes.NUMBER,
            field: 'temperature'
        },
        ph: {
            type: DataTypes.NUMBER,
            field: 'ph'
        }
    }, {
        sequelize,
        tableName: 'indicator_bacteria_tests',
        timestamps: false
     });
}