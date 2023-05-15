'use strict';

var utils = require('../utils/writer.js');
var Quizzes = require('../service/QuizzesService');

module.exports.createQuiz = function createQuiz (req, res, next, level) {
  Quizzes.createQuiz(level)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuizzes = function getQuizzes (req, res, next, level) {
  Quizzes.getQuizzes(level)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
