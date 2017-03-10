var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config.json');

var booksController = require('./controllers/books_controller');
var moviesController = require('./controllers/movies_controller');

var logCatchPhrase = function (req, res, next) {
  console.log('Wubba Dubba Lub Dub');
  next();
};

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.get('/wishlists', function (req, res, next) {
  res.json(req.session.wishlist);
});

app.post('/wishlists', function (req, res, next) {
  if (!req.session.wishlist) {
    req.session.wishlist = [];
  }

  req.session.wishlist.push(req.body);

  res.json(req.session.wishlist);
});

app.get('/books', booksController.index);
app.get('/books/:id', booksController.show);
app.post('/books', logCatchPhrase, booksController.create);
app.delete('/books/:id', logCatchPhrase, booksController.destroy);

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.post('/movies', moviesController.create);
app.delete('/movies/:id', moviesController.destroy);

app.listen(3000, function() {
  console.log('listening!');
});
