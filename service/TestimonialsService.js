'use strict';


/**
 * Create testimonials
 * Create testimonials
 *
 * body RequestTestimonials  (optional)
 * returns Testimonials
 **/
exports.createTestimonials = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create testimonials
 * Create testimonials
 *
 * body RequestTestimonials  (optional)
 * returns Testimonials
 **/
exports.createTestimonials = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete testimonial
 * Delete spesific testimonial by id
 *
 * id Integer The testimonial's id
 * no response value expected for this operation
 **/
exports.deleteTestimonial = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get testimonials
 * Get all testimonials
 *
 * returns Testimonials
 **/
exports.getAllTestimonials = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get testimonial's by id
 * Get specific testimonial by id
 *
 * id Integer The testimonial's id
 * returns Testimonials
 **/
exports.testimonialsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update testimonial
 * Update specific testimonial by id
 *
 * body RequestTestimonials  (optional)
 * id Integer The testimonial's id
 * returns Testimonials
 **/
exports.updateTestimonial = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update testimonial
 * Update specific testimonial by id
 *
 * body RequestTestimonials  (optional)
 * id Integer The testimonial's id
 * returns Testimonials
 **/
exports.updateTestimonial = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "testimony" : "Aplikasi ini sangat membantu saya mempelajari alat musik indonesia",
  "name" : "Iqbal Alfarizi",
  "rating" : 5,
  "photo" : "pp.png",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

