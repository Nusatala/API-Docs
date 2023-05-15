'use strict';


/**
 * Create FAQ
 * Create frequently asked question
 *
 * body RequestFAQ  (optional)
 * returns FAQ
 **/
exports.createFAQ = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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
 * Create FAQ
 * Create frequently asked question
 *
 * body RequestFAQ  (optional)
 * returns FAQ
 **/
exports.createFAQ = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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
 * Delete faq
 * Delete spesific frequently asked question by id
 *
 * id Integer The faq's id
 * no response value expected for this operation
 **/
exports.deleteFaq = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get faq by id
 * Get specific frequently asked question by id
 *
 * id Integer The faq's id
 * returns FAQ
 **/
exports.faqIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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
 * Get faq
 * Get all frequently asked question
 *
 * returns FAQ
 **/
exports.getAllFaq = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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
 * Update faq
 * Update frequently asked question by id
 *
 * body RequestFAQ  (optional)
 * id Integer The faq's id
 * returns FAQ
 **/
exports.updateFaq = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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
 * Update faq
 * Update frequently asked question by id
 *
 * body RequestFAQ  (optional)
 * id Integer The faq's id
 * returns FAQ
 **/
exports.updateFaq = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "question" : "Gamelan apa yang berasal dari Jawa Timur?",
  "answer" : "Gamelan Reog Ponorogo",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
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

