var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Home Controller: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.render('home/index');
});

router.get('/about', function (req, res) {
    res.render('home/about');
});

router.get('/profile', function (req, res) {
    res.render('home/profile');
});

router.get('/nolayout', function (req, res) {
    res.render('home/index', {
        layout: false
    });
});

router.get('/profile/nolayout', function (req, res) {
    res.render('home/profile', {
        layout: false
    });
});

router.get('/comment/nolayout', function (req, res) {
    res.render('home/comment', {
        layout: false
    });
});
module.exports = router;