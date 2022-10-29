var myApp = angular.module('myApp', []);

// Using $log instead of console.log for testing and debugging.
myApp.controller('mainController', function($scope, $log, $filter){

    //inspect
    $scope.name = "Joe Santos"
    $scope.formattedName = $filter('uppercase')($scope.name)

    $log.info($scope.name)
    $log.info($scope.formattedName)

    //use services to avoid you writing your own.
    //but if you cannot find one, it is easy to write your own.

})

/* 
Examples of variables provided by AngularJS (as seen in the open source file.
You can also go to https://docs.angularjs.org/api and read/practice under Services.
*/