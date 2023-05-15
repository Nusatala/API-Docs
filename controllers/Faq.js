'use strict';

var utils = require('../utils/writer.js');
var Faq = require('../service/FaqService');

module.exports.createFAQ = function createFAQ (req, res, next, body) {
  Faq.createFAQ(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFAQ = function createFAQ (req, res, next, body) {
  Faq.createFAQ(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFaq = function deleteFaq (req, res, next, id) {
  Faq.deleteFaq(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.faqIdGET = function faqIdGET (req, res, next, id) {
  Faq.faqIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFaq = function getAllFaq (req, res, next) {
  Faq.getAllFaq()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFaq = function updateFaq (req, res, next, body, id) {
  Faq.updateFaq(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFaq = function updateFaq (req, res, next, body, id) {
  Faq.updateFaq(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
