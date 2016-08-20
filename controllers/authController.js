var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
 

 // create application/json parser 
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// define the home page route
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
// define the about route
router.get('/about', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// POST /login gets urlencoded bodies 
router.post('/login', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.userName);
})


module.exports = router;