'use strict';


/**
 * Delete questions
 * This can only be done by the logged in admin.
 *
 * level String Quiz level for filltering the level of quizzes
 * id Integer id of the question
 * no response value expected for this operation
 **/
exports.deleteQuestions = function(level,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get question by id
 *
 * level String Quiz level for filltering the level of quizzes
 * id Integer id of the question
 * returns String
 **/
exports.getQuestion = function(level,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

