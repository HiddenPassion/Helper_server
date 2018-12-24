const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      field: 'is_admin',
      defaultValue: false,
    },
  });

  User.prototype.comparePassword = function(incomingPassword, cb) {
    bcrypt.compare(incomingPassword, this.password, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.beforeCreate((user, option) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt((saltRounds = 5), function(err, salt) {
        bcrypt.hash(user.password, salt, null, function(err, hash) {
          user.password = hash;
          resolve(user);
        });
      });
    });
  });

  return User;
};
