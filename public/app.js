function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    template: '<h2> Welcome To The Library </h2>'
  })
  .state('books', {
    url: '/books',
    templateUrl: 'books/booksTmpl.html',
    controller: 'booksCtrl'
  })
  .state('book', {
    url: '/books/:bookIdx',
    templateUrl: 'books/bookTmpl.html',
    controller: 'booksCtrl'
  })

  $urlRouterProvider.otherwise('/')
}

angular.module('biblioteca', ['ui.router']).config(config)
