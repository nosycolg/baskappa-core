import { Sequelize } from 'sequelize';
import CourtsModel from './models/tables/Courts';

const sequelize = new Sequelize('baskappa', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

const Courts = CourtsModel(sequelize);

const db = {
    Courts: Courts,
};

export { sequelize, db };
