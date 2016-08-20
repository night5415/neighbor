var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Home Controller: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    var x = req;
});

router.post('/login', function (req, res) {
    console.log(req.body);
    var t = req.body.args;
});

module.exports = router;