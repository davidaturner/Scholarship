var myApp = angular.module('myApp', []);

// Using $log instead of console.log for testing and debugging.
myApp.controller('mainController', function($scope, $log, $filter){

    //inspect
    console.log($scope)
    console.log($log)

    $log.log("Hello, World!")
    $log.info("This is some information.")
    $log.warn("Warning.")
    $log.debug("Some debug information while writing my code.")
    $log.error("This is an error!")
})

/* 
Examples of variables provided by AngularJS (as seen in the open source file.
    $provide.provider({
        $filter,
        $http,
        $log,
        $scope,
        $timeout
    })

You can also go to https://docs.angularjs.org/api and read under Services.
*/