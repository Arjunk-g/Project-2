const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env);
const sequelize = new Sequelize(

  process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

"user_db",
//   HARD-CODED-USERNAME HERE
"root",

//   HARD-CODED-PASSWORD HERE,
"",

  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
