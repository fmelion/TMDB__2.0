const {Model, DataTypes} = require('sequelize');
const db = require('../config/db');

class Favourite extends Model {}

Favourite.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'favourites',
  }
);

module.exports = Favourite;
