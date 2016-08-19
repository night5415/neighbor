var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();


// Create `ExpressHandlebars` instance with a default layout.
handlebars = exphbs.create({
    defaultLayout: 'main', 
    extname      : '.html', //set extension to .html so handlebars knows what to look for

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

//maps the home controller module located in the controllers folder
var home = require(__dirname + '/controllers/home');

//site entry point to the index page in views/root!
app.get('/', function(req, res) { 
  res.render('index', { layout: false });
});

//sets up the home controller
app.use('/home', home);

//this points to the public folder where img, js and css files will be
app.use(express.static(__dirname + '/public'));

//starts our server on port 3000
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});




   