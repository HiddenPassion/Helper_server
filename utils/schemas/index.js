const signIn = require('./signIn');
const signUp = require('./signUp');
const addUniversity = require('./addUniversity');
const addSubject = require('./addSubject');
const addMaterial = require('./addMaterial');
const addLecturer = require('./addLecturer');
const setLecturerRating = require('./setLecturerRating');
const updateLecturerRating = require('./updateLecturerRating');
const addFeedback = require('./addFeedback');
const addFeedbackRating = require('./addFeedbackRating');
const updateFeedback = require('./addFeedback');
const updateFeedbackRating = require('./updateFeedbackRating');

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
  updateLecturerRating,
  addFeedback,
  addFeedbackRating,
  updateFeedback,
  updateFeedbackRating,
};
