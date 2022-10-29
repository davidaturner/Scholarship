var myApp = angular.module('myApp', []);

// To allow minification, we must change the controller signature to include 
// array member '$scope' and '$log'
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

    $scope.name = "Tony";

    $timeout(function() {$scope.name = "Brucie Lew"}, 3000);
}])

/* 
Interpolation:
Creating a string by combining strings and a placeholder.

You can also go to https://docs.angularjs.org/api and read under Services.
*/