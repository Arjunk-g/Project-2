const express = require('express');
const controllers = require('./controllers');
// const sequelize = require('./config/connection');
const sequelize = require('./config/seedCon');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create();
// turn on controllers
app.use(controllers);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
        
    })
});
