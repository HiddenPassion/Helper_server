const createUserData = ({ id, email, username, password, isAdmin }) => ({
  id,
  username,
  password,
  isAdmin,
  email,
});

module.exports = createUserData;
