const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');



const app = express();
const PORT = process.env.PORT || 4200;
const hbs = exphbs.create({});
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on controllers
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT,() => console.log(`Example app listening at http://localhost:${PORT}`))
});
