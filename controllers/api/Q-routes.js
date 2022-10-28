const Kwiz = require('kwiz');
const router = require('express').Router();
const { HighScores } = require('../../models');


var flashcards = JSON.parse(data);
// CREATES new flashcard
router.get('/flashcards', function(req,res) {
  res.sendFile(path.join(__dirname, "../public/flashcards.handlebars"));
});

// 
router.post("/api/notes", function(req, res) {
  // Receives a new flashcard, adds it to schema.sql in the db folder, then returns the new note
  let newNote = req.body;
  notes.push(newNote);
  updateDb();
  // sends back the data that the note was taken! 
  res.status(200).json("Your note has been saved!");
  
});


module.exports = router;

