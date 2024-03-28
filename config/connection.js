const Sequelize = require("sequelize");

require("dotenv").config();

// Create a connection to our database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: 3306,
      }
    );
console.log(process.env.DB_HOST);

module.exports = sequelize;
