var express = require('express');
var bodyParser = require('body-parser');

var books = [];

var app = express();
app.use(bodyParser.json());

app.get('/books', function (req, res, next) {
  res.json(books);
});

app.post('/books', function (req, res, next) {
  books.push(req.body);
  res.json({ message: 'book uploaded' });
});

app.listen(3000, function() {
  console.log('listening!');
});
