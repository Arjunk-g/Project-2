const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HighScores extends Model {}

HighScores.init(
  {
    player_score: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'HighScores',
  }
);
module.exports = HighScores;
