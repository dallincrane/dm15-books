function booksCtrl($scope, $stateParams, booksService) {
  $scope.book = {}

  booksService.getBook($stateParams.bookIdx).then(function(response) {
    $scope.book = response.data
  })

}

angular.module('biblioteca').controller('booksCtrl', booksCtrl)
