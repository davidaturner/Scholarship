var myApp = angular.module('myApp', [])

// $scope is a service
myApp.controller('mainController', function($scope) {

})

var logPerson = function($scope, firstname, lastname) {
    return 'John Doe'
}

var logPersonString = logPerson.toString()
// console.log(logPerson('Mister', "Bogg"))

// console.log(logPersonString)

// parsing a function. creates an array of input parameters.
console.log(angular.injector().annotate(logPerson))