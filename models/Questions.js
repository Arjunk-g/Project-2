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
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
   answer: {
    type: DataTypes.STRING,
    allowNull: false
   }
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
