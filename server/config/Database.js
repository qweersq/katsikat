import { Sequelize } from "sequelize";

const db = new Sequelize('webkatsikat', 'root','', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;