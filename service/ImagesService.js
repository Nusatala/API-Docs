'use strict';


/**
 * Create images
 * Create images
 *
 * body RequestImages Create image (optional)
 * returns Images
 **/
exports.createImage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create images
 * Create images
 *
 * body RequestImages Create image (optional)
 * returns Images
 **/
exports.createImage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete the image data
 * Delete specific image data using id
 *
 * id Integer id of the image to be deleted
 * no response value expected for this operation
 **/
exports.deleteImage = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get images
 * Get all images
 *
 * returns Images
 **/
exports.getAllImages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get image data using id
 * Get specific image data using id
 *
 * id Integer image id
 * returns Images
 **/
exports.getImage = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get images
 * Get two images using label
 *
 * label String Label untuk memfilter gambar
 * returns ImagesArray
 **/
exports.getImagesLimit = function(label) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
}, {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the image data
 * Update the specific image data using id
 *
 * body RequestImages Update an existent image data in the Nusatala App (optional)
 * id Integer id of the image to be updated
 * returns Images
 **/
exports.putImage = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the image data
 * Update the specific image data using id
 *
 * body RequestImages Update an existent image data in the Nusatala App (optional)
 * id Integer id of the image to be updated
 * returns Images
 **/
exports.putImage = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "angklung.png",
  "updated_at" : "2023-05-13T16:30:00Z",
  "user_id" : 2,
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

