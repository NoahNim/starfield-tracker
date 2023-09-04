'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisitedPlanet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisitedPlanet.init({
    planetName: DataTypes.STRING,
    planetSystem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VisitedPlanet',
  });
  return VisitedPlanet;
};