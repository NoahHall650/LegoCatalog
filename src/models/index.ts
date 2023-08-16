import { Sequelize } from "sequelize";
import { LegoFactory } from "./lego";

const dbName = 'legoDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

LegoFactory(sequelize);

export const db = sequelize;