const signIn = require('./signIn');
const signUp = require('./signUp');
const addUniversity = require('./addUniversity');
const addSubject = require('./addSubject');
const addMaterial = require('./addMaterial');
const addLecturer = require('./addLecturer');
const setLecturerRating = require('./setLecturerRating');
const addFeedback = require('./addFeedback');
const setFeedbackRating = require('./setFeedbackRating');
const updateFeedback = require('./addFeedback');
const updateRating = require('./updateRating');
const setMaterialRating = require('./setMaterialRating');

module.exports = {
  signIn,
  signUp,
  addUniversity,
  updateUniversity: addUniversity,
  addSubject,
  updateSubject: addSubject,
  addMaterial,
  addLecturer,
  updateLecturer: addLecturer,
  setLecturerRating,
  addFeedback,
  setFeedbackRating,
  updateFeedback,
  setMaterialRating,
  updateFeedbackRating: updateRating,
  updateLecturerRating: updateRating,
  updateMaterialRating: updateRating,
};
