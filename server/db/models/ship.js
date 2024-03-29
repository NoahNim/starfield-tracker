'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ship.init({
    shipName: DataTypes.STRING,
    shipType: DataTypes.STRING,
    shipStolen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ship',
  });
  return Ship;
};