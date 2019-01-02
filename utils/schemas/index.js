const signIn = require('./signIn');
const signUp = require('./signUp');
const addUniversity = require('./addUniversity');
const addSubject = require('./addSubject');
const addMaterial = require('./addMaterial');

module.exports = {
  signIn,
  signUp,
  addUniversity,
  updateUniversity: addUniversity,
  addSubject,
  updateSubject: addSubject,
  addMaterial,
};
