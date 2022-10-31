const router = require('express').Router();

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// router.get('/', async (req, res) => {
//   // We find all dishes in the db and set the data equal to dishData
//   const dishData = await Dish.findAll().catch((err) => { 
//     res.json(err);
//   });
//   // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
//   const dishes = dishData.map((dish) => dish.get({ plain: true }));
//   // We render the template, 'all', passing in dishes, a new array of serialized objects.
//   res.render('all', { dishes });
//   });

const Kwiz = require('kwiz');
 
  const quizDefinition = {
    questions: [
      { message: 'Hey' },
      { message: 'What is your name?', answer: {type: 'string', hint: 'Really?', id: 'name'} },
      { message: 'Buy {{answers.name}}' }
    ]
  }
   
  const quiz = new Kwiz(quizDefinition)
    quiz.start()
    .then((reply) => {
      return quiz.processMessage('John')
    })
    .then((reply) => {
      return quiz.processMessage()
    })
    .then((reply) => {
      console.log(quiz.getState())
    })
  
    quiz.addHandler('speed', function (question, answer) {
      var matches = /(\d+) +mph/i.exec(answer)
      return matches 
        ? Promise.resolve(parseInt(matches[1], 10)) 
        : Promise.reject(question.hint || 'Wrong speed value')
    })

module.exports = router;
