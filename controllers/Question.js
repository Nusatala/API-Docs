'use strict';

var utils = require('../utils/writer.js');
var Question = require('../service/QuestionService');

module.exports.updateQuestion = function updateQuestion (req, res, next, body, level, id) {
  Question.updateQuestion(body, level, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateQuestion = function updateQuestion (req, res, next, body, level, id) {
  Question.updateQuestion(body, level, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
