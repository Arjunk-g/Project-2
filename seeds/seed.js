const sequelize = require(`../config/connection.js`);
const { User,Questions,Answer,HighScores, } = require('../models/');


const userData = [{"user_id":1, "name": "Bee", "email":"0987324@gjioasj.net", "password":"098324049382"}];
const answer = [
  {"answer_id":1, "type": "string", "hint": "Same as the last one", "answer": "To seek the Holy Grail." },
  {"answer_id":2, "type": "string", "hint": "I don't know that....", "answer": "Assur" },
  {"answer_id":3, "type": "string", "hint": "IDK", "answer": "African or European?" }
];
const questions = [
  {"question_id":1, "message": "What is your Quest?", "answer_id":1, "user_id":1},
  {"question_id":2, "message": "What… is the capital of Assyria?", "answer_id":2, "user_id":1},
  {"question_id":3, "message": "What is the airspeed velocity of an unlayden swallow?", "answer_id":3, "user_id":1 }
];
const highscores = [
  {"player_score":999, "user_id":1},
  {"player_score":324, "user_id":1},
  {"player_score":7, "user_id":1}
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Answer.bulkCreate(answer, {
    individualHooks: true,
    returning: true,
  });
  await Questions.bulkCreate(questions, {
    individualHooks: true,
    returning: true,
  });
 
  await HighScores.bulkCreate(highscores, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();