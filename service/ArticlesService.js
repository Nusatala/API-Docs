'use strict';


/**
 * delete the article data
 * delete specific article data using id
 *
 * id Integer id of the article to be deleted
 * no response value expected for this operation
 **/
exports.deleteArticle = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all articles
 * This can only be done by the logged in user.
 *
 * returns Articles
 **/
exports.getAllArticles = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get article data using id
 * get specific article data using id
 *
 * id Integer article id
 * returns Articles
 **/
exports.getArticle = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create article
 * create new article
 *
 * body RequestArticles  (optional)
 * returns Articles
 **/
exports.postArticles = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create article
 * create new article
 *
 * body RequestArticles  (optional)
 * returns Articles
 **/
exports.postArticles = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update the article data
 * update the specific article data using id
 *
 * body RequestArticles  (optional)
 * id Integer id of the article to be updated
 * returns Articles
 **/
exports.putArticle = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update the article data
 * update the specific article data using id
 *
 * body RequestArticles  (optional)
 * id Integer id of the article to be updated
 * returns Articles
 **/
exports.putArticle = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thumbnail" : "sanggar-seni-gamelan.png",
  "bahan_pembuatan" : "logam perunggu",
  "sources" : "logam perunggu",
  "created_at" : "0014-11-13T00:00:00.000+00:00",
  "history" : "lorem ipsum dolor...",
  "title" : "Jenis Jenis Gamelan",
  "tutorial_id" : 1,
  "updated_at" : "0014-12-14T00:00:00.000+00:00",
  "user_id" : 1,
  "id" : 2,
  "image_id" : 1,
  "asal_daerah" : "sanggar-seni-gamelan.png",
  "views" : 123
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

