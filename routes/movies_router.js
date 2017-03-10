var express = require('express');
var router = express.Router();

var moviesController = require('../controllers/movies_controller');

router.get('/', moviesController.index);
router.get('/:id', moviesController.show);
router.post('/', moviesController.create);
router.delete('/:id', moviesController.destroy);

module.exports = router;
