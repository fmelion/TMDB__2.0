const User = require('./Users');
const Favourite = require('./Favourites');

User.hasMany(Favourite);
Favourite.belongsToMany(User, { through: 'usersFavourites' });

module.exports = { User, Favourite };
