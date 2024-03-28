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
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
      }
    );

// Access the values directly from process.env
console.log("Database name is:", process.env.DB_NAME);
console.log("User name is:", process.env.DB_USER);
console.log("Password name is:", process.env.DB_PASSWORD);

module.exports = sequelize;
