'use strict';


/**
 * Delete the product data
 * Delete specific product data using id
 *
 * id Integer id of the product to be deleted
 * no response value expected for this operation
 **/
exports.deleteProduct = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all products
 * Get all product
 *
 * returns Products
 **/
exports.getAllProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get product data using id
 * Get specific product data using id
 *
 * id Integer product id
 * returns Products
 **/
exports.getProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create products
 * Create new a product
 *
 * body RequestProducts  (optional)
 * returns Products
 **/
exports.postProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create products
 * Create new a product
 *
 * body RequestProducts  (optional)
 * returns Products
 **/
exports.postProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the product data
 * Update the specific product data using id
 *
 * body RequestProducts  (optional)
 * id Integer id of the product to be updated
 * returns Products
 **/
exports.putProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the product data
 * Update the specific product data using id
 *
 * body RequestProducts  (optional)
 * id Integer id of the product to be updated
 * returns Products
 **/
exports.putProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "angklung.png",
  "cost" : 300000,
  "updated_at" : "2023-05-13T15:30:00Z",
  "user_id" : 2,
  "link" : "https://example.com",
  "rating" : 4.7,
  "description" : "Dimainkan dengan cara digoyangkan, menghasilkan suara indah yang khas. Mudah dipelajari dan memberikan pengalaman musik yang menyenangkan.",
  "created_at" : "2023-05-13T15:30:00Z",
  "id" : 1,
  "label" : "Angklung",
  "title" : "Alat musik Angklung Jawa Barat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

