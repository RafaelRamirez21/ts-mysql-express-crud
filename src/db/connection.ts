import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()
const db = new Sequelize(

    `${process.env.DB_NAME}`,
    `${process.env.DB_USER}`,
    `${process.env.DB_PASSWORD}`,
   
    {  
    host:'us-cdbr-east-04.cleardb.com',
    dialect:'mysql', 
    }
);
export default db;
