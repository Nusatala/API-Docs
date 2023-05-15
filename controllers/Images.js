'use strict';

var utils = require('../utils/writer.js');
var Images = require('../service/ImagesService');

module.exports.createImage = function createImage (req, res, next, body) {
  Images.createImage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImage = function createImage (req, res, next, body) {
  Images.createImage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImage = function deleteImage (req, res, next, id) {
  Images.deleteImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllImages = function getAllImages (req, res, next) {
  Images.getAllImages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImage = function getImage (req, res, next, id) {
  Images.getImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImagesLimit = function getImagesLimit (req, res, next, label) {
  Images.getImagesLimit(label)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putImage = function putImage (req, res, next, body, id) {
  Images.putImage(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putImage = function putImage (req, res, next, body, id) {
  Images.putImage(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
