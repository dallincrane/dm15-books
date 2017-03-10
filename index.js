var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config.json');

var booksRouter = require('./routes/books_router');
var moviesRouter = require('./routes/movies_router');

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

app.use('/books', booksRouter);
app.use('/movies', moviesRouter);

app.listen(3000, function() {
  console.log('listening!');
});
