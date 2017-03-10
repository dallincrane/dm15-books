var express = require('express');
var router = express.Router();

var booksController = require('../controllers/books_controller');

var logCatchPhrase = function (req, res, next) {
  console.log('Wubba Lubba Dub Dub');
  next();
};

router.get('/', booksController.index);
router.get('/:id', booksController.show);
router.post('/', logCatchPhrase, booksController.create);
router.delete('/:id', logCatchPhrase, booksController.destroy);

module.exports = router
