const { Questions, Answer } = require('../models');
const { findAll } = require('../models/Questions');

const router = require('express').Router();


// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/create', (req, res) => {
   res.render('cards');
});

router.get('/all', async (req, res) => {
  try {
    const questionData = await Questions.findAll({

    })

    const questions = questionData.map((question) => question.get({plain: true}));

    res.render('all', {
      questions
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/', async (req, res) => {
  try {
    const question = await Questions.findAll({include:Answer});
    const betterQuestion = question.map((element)=>element.get({plain:true}))
    const finalQuestions = betterQuestion.map((element)=>{
    return {
      ans:element.Answer.answer,
      que:{
        message:element.message,
        answer:{
          type:element.Answer.type,
          hint:element.Answer.hint,
          id:`question${element.question_id}`
        }
      }
    }
  
    });
    console.log(finalQuestions);
    res.render('homepage',{finalQuestions});
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
