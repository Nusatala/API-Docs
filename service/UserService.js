'use strict';


/**
 * Change user's password on the system/database
 * Change user's password on the system/database
 *
 * body Users_changepassword_body Changed user password (optional)
 * no response value expected for this operation
 **/
exports.changeUserPassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Change user's password on the system/database
 * Change user's password on the system/database
 *
 * body Users_changepassword_body Changed user password (optional)
 * no response value expected for this operation
 **/
exports.changeUserPassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body Users Created user object (optional)
 * returns Users
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "google_id" : "google_id",
  "password" : "12345",
  "google_secret" : "google_secret",
  "role" : false,
  "updated_at" : "0014-11-13T00:00:00.000+00:00",
  "name" : "John",
  "photo" : "gamelan.png",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body Users Created user object (optional)
 * returns Users
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "google_id" : "google_id",
  "password" : "12345",
  "google_secret" : "google_secret",
  "role" : false,
  "updated_at" : "0014-11-13T00:00:00.000+00:00",
  "name" : "John",
  "photo" : "gamelan.png",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * id String The id that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by id
 *
 * id Integer The name that needs to be fetched. Use user1 for testing. 
 * returns Users
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "google_id" : "google_id",
  "password" : "12345",
  "google_secret" : "google_secret",
  "role" : false,
  "updated_at" : "0014-11-13T00:00:00.000+00:00",
  "name" : "John",
  "photo" : "gamelan.png",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 *
 * username String The user name for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Regist user into system/database
 *
 * body Users_register_body  (optional)
 * returns Users
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "google_id" : "google_id",
  "password" : "12345",
  "google_secret" : "google_secret",
  "role" : false,
  "updated_at" : "0014-11-13T00:00:00.000+00:00",
  "name" : "John",
  "photo" : "gamelan.png",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body Users Update an existent user in the Nusatala App (optional)
 * id String id that need to be deleted
 * no response value expected for this operation
 **/
exports.updateUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body Users Update an existent user in the Nusatala App (optional)
 * id String id that need to be deleted
 * no response value expected for this operation
 **/
exports.updateUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

