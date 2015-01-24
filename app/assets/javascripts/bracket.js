angular.module('bracketGenApp', ["ngResource"])

.controller("BracketController", ['$scope', function($scope) {
  $scope.entries = [
    {name: "Mike"},
    {name: "Bill"}
  ]

}]);