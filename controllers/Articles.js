'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.deleteArticle = function deleteArticle (req, res, next, id) {
  Articles.deleteArticle(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllArticles = function getAllArticles (req, res, next) {
  Articles.getAllArticles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticle = function getArticle (req, res, next, id) {
  Articles.getArticle(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postArticles = function postArticles (req, res, next, body) {
  Articles.postArticles(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postArticles = function postArticles (req, res, next, body) {
  Articles.postArticles(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putArticle = function putArticle (req, res, next, body, id) {
  Articles.putArticle(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putArticle = function putArticle (req, res, next, body, id) {
  Articles.putArticle(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
