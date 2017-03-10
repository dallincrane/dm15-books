function navCtrl($scope, booksService) {
  $scope.books = []

  booksService.getBooks().then(function(response) {
    $scope.books = response.data
  })
}

angular.module('biblioteca').controller('navCtrl', navCtrl)
