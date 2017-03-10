function booksCtrl($scope, $stateParams, booksService) {
  $scope.books = {}
  $scope.book = {}

  booksService.getBooks().then(function(response) {
    console.log(response)
    $scope.books = response.data
  })

  booksService.getBook($stateParams.bookIdx).then(function(response) {
    $scope.book = response.data
  })

}

angular.module('biblioteca').controller('booksCtrl', booksCtrl)
