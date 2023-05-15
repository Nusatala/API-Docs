'use strict';


/**
 * Create quiz
 * This can only be done by the logged in admin.
 *
 * level String Quiz level for filltering the level of quizzes
 * returns Quizzes
 **/
exports.createQuiz = function(level) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "quiz1.png",
  "total_questions" : 10,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "level" : "easy",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all quizzes
 *
 * level String Quiz level for filltering the level of quizzes
 * returns Quizzes
 **/
exports.getQuizzes = function(level) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "quiz1.png",
  "total_questions" : 10,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "level" : "easy",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

