function booksService($http) {
  this.books = []

  this.getBooks = function(bookIdx) {
    return $http({
      method: 'GET',
      url: '/books'
    })
  }

  this.getBook = function(bookIdx) {
    return $http({
      method: 'GET',
      url: '/books/' + bookIdx
    })
  }
}

angular.module('biblioteca').service('booksService', booksService)
