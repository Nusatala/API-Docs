'use strict';

var utils = require('../utils/writer.js');
var Questions = require('../service/QuestionsService');

module.exports.deleteQuestions = function deleteQuestions (req, res, next, level, id) {
  Questions.deleteQuestions(level, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestion = function getQuestion (req, res, next, level, id) {
  Questions.getQuestion(level, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
