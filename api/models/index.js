const User = require('./Users');
const Favourite = require('./Favourites');

User.hasMany(Favourite);
Favourite.belongsTo(User);

module.exports = { User, Favourite };
