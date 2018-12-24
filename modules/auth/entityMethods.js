const { User } = require('../../models');

const createUser = async ({ email, username, password }, isAdmin) => {
  try {
    return await User.create({
      email,
      username,
      password,
      isAdmin,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
};
