const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init(
  {
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.STRING
    },
    answer_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `user` model, which we set in `user.js` as its `modelName` property
        model: 'Answer',
        key: 'answer_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `user` model, which we set in `user.js` as its `modelName` property
        model: 'User',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Questions'
  }
);

module.exports = Questions;
