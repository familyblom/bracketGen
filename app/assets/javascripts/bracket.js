angular.module('bracketGenApp', ["ngResource"])

.controller("BracketController", ['$scope', function($scope) {
  $scope.entries = [
    {name: "Mike"},
    {name: "Bill"}
  ]

  $scope.addEntry = function(entry){
    $scope.entries.push({name: entry})
  }

}]);