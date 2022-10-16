var myApp = angular.module('myApp', [])

myApp.controller('mainController', function($scope) {

    console.log("mainController here!")
    $scope.name = 'Jane Doe'
    $scope.occupation = "Web Developer"
    $scope.getname = function() {
        return $scope.name
    }

    console.log($scope)

})