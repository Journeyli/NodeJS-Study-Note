var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /public Guide页
router.get('/', function(req, res, next) {
  res.render('public');
});
// GET /public/111_eg Node.js 的安装与使用
//
router.get('/111',function(req, res, next) {
  res.render('public/111');
});
// GET /public/121_eg MongoDB 的安装与使用
//
router.get('/121',function(req, res, next) {
  res.render('public/121');
});
// GET /public/211_eg require
//
router.get('/21',checkLogin,function(req, res, next) {
  res.render('public/21');
});
// GET /public/211_eg require
//
router.get('/22',checkLogin,function(req, res, next) {
  res.render('public/22');
});
// GET /public/211_eg require
//
router.get('/23',checkLogin,function(req, res, next) {
  res.render('public/23');
});
// GET /public/211_eg require
//
router.get('/24',checkLogin,function(req, res, next) {
  res.render('public/24');
});
// GET /public/211_eg require
//
router.get('/25',checkLogin,function(req, res, next) {
  res.render('public/25');
});
// GET /public/211_eg require
//
router.get('/26',checkLogin,function(req, res, next) {
  res.render('public/26');
});
// GET /public/211_eg require
//
router.get('/31',checkLogin,function(req, res, next) {
  res.render('public/31');
});
// GET /public/211_eg require
//
router.get('/32',checkLogin,function(req, res, next) {
  res.render('public/32');
});
// GET /public/211_eg require
//
router.get('/33',checkLogin,function(req, res, next) {
  res.render('public/33');
});
// GET /public/211_eg require
//
router.get('/34',checkLogin,function(req, res, next) {
  res.render('public/34');
});
// GET /public/211_eg require
//
router.get('/41',checkLogin,function(req, res, next) {
  res.render('public/41');
});
// GET /public/211_eg require
//
router.get('/42',checkLogin,function(req, res, next) {
  res.render('public/42');
});
// GET /public/211_eg require
//
router.get('/43',checkLogin,function(req, res, next) {
  res.render('public/43');
});
// GET /public/211_eg require
//
router.get('/44',checkLogin,function(req, res, next) {
  res.render('public/44');
});
// GET /public/211_eg require
//
router.get('/45',checkLogin,function(req, res, next) {
  res.render('public/45');
});
// GET /public/211_eg require
//
router.get('/46',checkLogin,function(req, res, next) {
  res.render('public/46');
});
// GET /public/211_eg require
//
router.get('/47',checkLogin,function(req, res, next) {
  res.render('public/47');
});
// GET /public/211_eg require
//
router.get('/48',checkLogin,function(req, res, next) {
  res.render('public/48');
});
// GET /public/211_eg require
//
router.get('/49',checkLogin,function(req, res, next) {
  res.render('public/49');
});
// GET /public/211_eg require
//
router.get('/410',checkLogin,function(req, res, next) {
  res.render('public/410');
});

module.exports = router;