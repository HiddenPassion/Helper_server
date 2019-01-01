const signIn = require('./signIn');
const signUp = require('./signUp');
const addUniversity = require('./addUniversity');

module.exports = {
  signIn,
  signUp,
  addUniversity,
  updateUniversity: addUniversity,
  
};
