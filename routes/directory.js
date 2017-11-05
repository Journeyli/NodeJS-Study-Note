var express = require('express');
var router = express.Router();

var DirectoryModel = require('../models/directorys');

var checkLogin = require('../middlewares/check').checkLogin;

// GET /directory 所有用户
//   eg: GET /directory?author=xxx
router.get('/', function(req, res, next) {
  res.render('directory');
//});

// GET /directory 特定用户
//router.get('/', checkLogin, function(req, res, next) {
//  res.render('directory');
});

// GET /directory 进入主页面或者用户可见页
//   eg: GET /directory?author=xxx
router.get('/', function(req, res, next) {
  var author = req.query.author;

  DirectoryModel.getDirectorys(author)
  .then(function (directorys) {
      res.render('directory', {
        directorys: directorys
      });
    })
    .catch(next);
});

module.exports = router;