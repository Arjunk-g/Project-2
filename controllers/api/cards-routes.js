// const Kwiz = require('kwiz');
const router = require('express').Router();
const { Questions } = require('../../models');


// var flashcards = JSON.parse(data);
// // CREATES new flashcard
// router.get('/cards-routes', function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/flashcards.handlebars"));
//   res.json(flashcards);
// });

// 
router.post('/create', async (req, res) => {
  // Receives, adds it to db.json, then returns the new flashcard
  try {
    const newQuestion = await Questions.create({
      question: req.body.question,
      answer: req.body.answer
    });
    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }

});



module.exports = router;

