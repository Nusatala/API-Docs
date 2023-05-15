'use strict';

var utils = require('../utils/writer.js');
var Tutorials = require('../service/TutorialsService');

module.exports.deleteTutorial = function deleteTutorial (req, res, next, id) {
  Tutorials.deleteTutorial(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTutorial = function getTutorial (req, res, next, id) {
  Tutorials.getTutorial(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tutorialsGET = function tutorialsGET (req, res, next) {
  Tutorials.tutorialsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tutorialsPOST = function tutorialsPOST (req, res, next, body) {
  Tutorials.tutorialsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tutorialsPOST = function tutorialsPOST (req, res, next, body) {
  Tutorials.tutorialsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTutorial = function updateTutorial (req, res, next, body, id) {
  Tutorials.updateTutorial(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTutorial = function updateTutorial (req, res, next, body, id) {
  Tutorials.updateTutorial(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
