import pkg from 'pg';
const { Pool } = pkg;
import { Sequelize } from "sequelize";

const pool = new Pool({
    user: "postgres",
    password: "perjalanan",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

const sequelize = new Sequelize('postgres', 'postgres', 'perjalanan', {
    host: 'localhost',
    dialect: 'postgres'
})




const db = {
    query: (text, params) => pool.query(text, params)
};

export { db, sequelize };
