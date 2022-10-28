const Kwiz = require('kwiz');
const router = require('express').Router();
const { HighScores } = require('../../models');


var flashcards = JSON.parse(data);
// CREATES new flashcard
router.get('/flashcards', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/flashcards.handlebars"));
  res.json(flashcards);
});

// 
router.post("/api/notes", function (req, res) {
  // Receives a new note, adds it to db.json, then returns the new note
  let newFlashcard = req.body;
  flashcards.push(newFlashcard);
  updateDb();
  // sends back the data that the note was taken! 
  res.status(200).json("Flashcard saved!");

});


module.exports = router;

