import {Sequelize} from 'sequelize';
import collision from './models/collision.model';

const secrets = require('../../secret-config.json');
const sequelize = new Sequelize(`postgres://${secrets.database.user}:${secrets.database.password}@${secrets.database.host}:${secrets.database.port}/${secrets.database.database}`)

const modelDefiners = [
    collision
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

export default sequelize;