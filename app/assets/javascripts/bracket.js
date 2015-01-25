angular.module('bracketGenApp', ["ngResource"])

.controller("BracketController", ['$scope', '$resource', function($scope, $resource) {
  Entry = $resource("/entries/:id", {id: "@id"})
  entry_list = Entry.get(function(response){
    $scope.entries = response.entries
  })

  $scope.addEntry = function(entry){
    $scope.entries.push({name: entry})
  }

}]);