'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quest.init({
    questName: DataTypes.STRING,
    questGiver: DataTypes.STRING,
    questStart: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};