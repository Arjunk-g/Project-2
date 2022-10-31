const Kwiz = require('kwiz');
const router = require('express').Router();
const { HighScores } = require('../../models');


var flashcards = JSON.parse(data);
// CREATES new flashcard
router.get('/cards-routes', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/flashcards.handlebars"));
  res.json(flashcards);
});

// 
router.post("/api/cards-routes", function (req, res) {
  // Receives, adds it to db.json, then returns the new flashcard
  let newFlashcard = req.body;
  flashcards.push(newFlashcard);
  updateDb();
  // sends back the data that the flashcard was made! 
  res.status(200).json("Flashcard saved!");

});


module.exports = router;

