'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.deleteProduct = function deleteProduct (req, res, next, id) {
  Products.deleteProduct(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProducts = function getAllProducts (req, res, next) {
  Products.getAllProducts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct = function getProduct (req, res, next, id) {
  Products.getProduct(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProduct = function postProduct (req, res, next, body) {
  Products.postProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProduct = function postProduct (req, res, next, body) {
  Products.postProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProduct = function putProduct (req, res, next, body, id) {
  Products.putProduct(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProduct = function putProduct (req, res, next, body, id) {
  Products.putProduct(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
