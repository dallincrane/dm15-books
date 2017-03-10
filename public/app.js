function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    template: '<h3> Welcome To The Library </h3>'
  })
  .state('books', {
    url: '/books/:bookIdx',
    templateUrl: 'books/booksTmpl.html',
    controller: 'booksCtrl'
  })

  $urlRouterProvider.otherwise('/')
}

angular.module('biblioteca', ['ui.router']).config(config)
