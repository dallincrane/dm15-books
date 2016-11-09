//  /controllers/movies_controller.js
var movies = require('../models/movies');

module.exports = {
  index: function (req, res, next) {
    var queryRating = parseInt(req.query.rating);

    if (queryRating || queryRating === 0) {
      result = movies.filter(function (movie) {
        return movie.rating === queryRating;
      });
      res.json(result);
    } else {
      res.json(movies);
    }
  },

  show: function (req, res, next) {
    var movieIndex = parseInt(req.params.id);
    var movie = movies[movieIndex];
    res.json(movie);
  },

  create: function (req, res, next) {
    movies.push(req.body);
    res.json({ message: 'movie uploaded' });
  },

  destroy: function (req, res, next) {
    var movieIndex = parseInt(req.params.id);
    movies.splice(movieIndex, 1);
    res.json({});
  }
};
