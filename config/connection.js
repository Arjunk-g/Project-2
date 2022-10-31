const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
// REPLACE THESE WITH THE VALUES IN THE DOTENV WHEN YOU SEED
// THEN IMMEDIATLY RETURN TO HOW IT WAS, FOR SOME REASON THAT
// SEED FILE HATES DOTENV...
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;