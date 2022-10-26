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
    // This column will store a reference of the `id` of the `user` that owns this Library Card
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `user` model, which we set in `user.js` as its `modelName` property
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'HighScores',
  }
);
