const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on controller folder
app.use(routes);

// turn on the server to the port number
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT,() => console.log(`Example app listening at http://localhost:${PORT}`))

});









// Arjun's comments
// const controllers = require('./controllers');
// // const sequelize = require('./config/connection');
// const sequelize = require('./config/seedCon');
// const exphbs = require('express-handlebars');
// const app = express();
// const PORT = process.env.PORT || 4200;
// // calling handlebars engine
// const handlebars =require('express-handlebars');
// app.set ('view engine','handlebars');

// app.use (express.static('public'));
// 


// <<<<<<< HEAD
// const hbs = exphbs.create();
// // turn on controllers
// app.use(controllers);

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// // turn on connection to db and server
// sequelize.sync({ force: true }).then(() => {
//     app.listen(PORT, () => {
//         console.log(`Example app listening at http://localhost:${PORT}`)
        
//     })
// =======

