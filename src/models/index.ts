import { Sequelize } from "sequelize";
import { LegoFactory } from "./lego";

const dbName = ''; // Your database name here
const username = ''; // Your username here
const password = ''; // Your password here

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

LegoFactory(sequelize);

export const db = sequelize;