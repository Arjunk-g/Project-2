const User = require('./User');
const HighScores = require('./HighScores');
const Questions = require('./Questions');
const Answer = require('./Answer');

User.hasMany(Questions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(HighScores, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Questions.hasOne(Answer, {
  foreignKey: 'answer_id',
  onDelete: 'CASCADE',
});

HighScores.belongsTo(User, {
  foreignKey: 'user_id',
});

Questions.belongsTo(User, {
  foreignKey: 'user_id',
});

Answer.belongsTo(Questions, {
  foreignKey: 'answer_id',
});



// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { User, HighScores,Questions,Answer };
