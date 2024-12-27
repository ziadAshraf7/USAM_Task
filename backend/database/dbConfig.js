
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({ force: false , alter : true}) 
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));


export default  {sequelize} ;
