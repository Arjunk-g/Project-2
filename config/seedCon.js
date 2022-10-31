const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env);
const sequelize = new Sequelize(

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
