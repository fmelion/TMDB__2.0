const { Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const bcrypt = require('bcrypt');

class User extends Model {
  isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
  };
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
  }
);

// User.addHook('beforeCreate', user => {
//   return bcrypt.hash(user.password, 10).then(password => {
//     user.password = password;
//   });
// });

module.exports = User;
