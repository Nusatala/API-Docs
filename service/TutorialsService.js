'use strict';


/**
 * Delete the tutorial data
 * Delete specific tutorial data using id
 *
 * id Integer id of the tutorial to be deleted
 * no response value expected for this operation
 **/
exports.deleteTutorial = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a tutorial
 * Get specific tutorial using id
 *
 * id Integer id for get specific tutorial
 * returns Tutorials
 **/
exports.getTutorial = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T17:30:00Z",
  "link" : "https://youtu.be/eil9v7bno7g",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "image_id" : 12
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all tutorials
 * Get all tutorials
 *
 * no response value expected for this operation
 **/
exports.tutorialsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a tutorial
 * Create a tutorial
 *
 * body RequestTutorials  (optional)
 * returns Tutorials
 **/
exports.tutorialsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T17:30:00Z",
  "link" : "https://youtu.be/eil9v7bno7g",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "image_id" : 12
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a tutorial
 * Create a tutorial
 *
 * body RequestTutorials  (optional)
 * returns Tutorials
 **/
exports.tutorialsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T17:30:00Z",
  "link" : "https://youtu.be/eil9v7bno7g",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "image_id" : 12
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update tutorial
 * Update spesific tutorial using id
 *
 * body RequestTutorials Update an existent tutorial data in the Nusatala App (optional)
 * id Integer id for tutorial that need to be updated
 * returns Tutorials
 **/
exports.updateTutorial = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T17:30:00Z",
  "link" : "https://youtu.be/eil9v7bno7g",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "image_id" : 12
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update tutorial
 * Update spesific tutorial using id
 *
 * body RequestTutorials Update an existent tutorial data in the Nusatala App (optional)
 * id Integer id for tutorial that need to be updated
 * returns Tutorials
 **/
exports.updateTutorial = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "2023-05-13T17:30:00Z",
  "link" : "https://youtu.be/eil9v7bno7g",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "image_id" : 12
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

