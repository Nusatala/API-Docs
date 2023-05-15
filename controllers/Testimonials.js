'use strict';

var utils = require('../utils/writer.js');
var Testimonials = require('../service/TestimonialsService');

module.exports.createTestimonials = function createTestimonials (req, res, next, body) {
  Testimonials.createTestimonials(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTestimonials = function createTestimonials (req, res, next, body) {
  Testimonials.createTestimonials(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTestimonial = function deleteTestimonial (req, res, next, id) {
  Testimonials.deleteTestimonial(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTestimonials = function getAllTestimonials (req, res, next) {
  Testimonials.getAllTestimonials()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.testimonialsIdGET = function testimonialsIdGET (req, res, next, id) {
  Testimonials.testimonialsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTestimonial = function updateTestimonial (req, res, next, body, id) {
  Testimonials.updateTestimonial(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTestimonial = function updateTestimonial (req, res, next, body, id) {
  Testimonials.updateTestimonial(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
