const { Questions, Answer } = require('../models');
const { findAll } = require('../models/Questions');

const router = require('express').Router();

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const question = await Questions.findAll({include:Answer});
    console.log(question);
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
