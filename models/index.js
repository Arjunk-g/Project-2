const User = require('./User');
const HighScores = require('./HighScores');

HighScores.hasOne(User, {
  foreignKey: 'user_id',
  // When we delete a User, make sure to also delete the associated Library Card.
  onDelete: 'CASCADE',
});

User.belongsTo(HighScores, {
  foreignKey: 'user_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { User, HighScores };
