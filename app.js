var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.set('port', (process.env.PORT || 5000));

//this points to the public folder where img, js and css files will be
app.use(express.static(__dirname + '/public')); 

// Create `ExpressHandlebars` instance with a default layout.
handlebars = exphbs.create({
  defaultLayout: 'main',
  extname: '.html', //set extension to .html so handlebars knows what to look for

  // Uses multiple partials dirs, templates in "shared/templates/" are shared
  // with the client-side of the app (see below).
  partialsDir: [
    'views/shared/',
    'views/partials/'
  ]
});
// Register `hbs` as our view engine using its bound `engine()` function.
// Set html in app.engine and app.set so express knows what extension to look for.
app.engine('html', handlebars.engine);
app.set('view engine', 'html');

//site entry point to the index page in views/root!
app.get('/', function (req, res) {
  res.render('index', { layout: false });
});

//maps the home controller module located in the controllers folder
var home = require(__dirname + '/controllers/homeController');
var comment = require(__dirname + '/controllers/commentController');
var auth = require(__dirname + '/controllers/authController');
//sets up the controllers
app.use('/home', home);
app.use('/comment', comment);
app.use('/auth', auth);
 
//starts our server on port 5000 
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});




