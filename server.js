const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on controllers
app.use(controllers);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});