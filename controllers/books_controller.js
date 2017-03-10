//  /controllers/books_controller.js
var books = require('../models/books');

module.exports = {
  index: function (req, res, next) {
    var searchTerm = parseInt(req.query.search);

    if (searchTerm || searchTerm === 0) {
      result = books.filter(function (book) {
        return book.title === searchTerm || book.author === searchTerm;
      });
      res.json(result);
    } else {
      res.json(books);
    }
  },

  show: function (req, res, next) {
    var bookIndex = parseInt(req.params.id);
    var book = books[bookIndex];
    res.json(book);
  },

  create: function (req, res, next) {
    books.push(req.body);
    res.json({ message: 'book uploaded' });
  },

  destroy: function (req, res, next) {
    var bookIndex = parseInt(req.params.id);
    books.splice(bookIndex, 1);
    res.json({});
  }
};
