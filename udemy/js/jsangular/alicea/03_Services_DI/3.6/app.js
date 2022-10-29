var myApp = angular.module('myApp', []);

// To minify, we must change the controller to include array member
// '$scope' and '$log'
myApp.controller('mainController', ['$scope', '$log', function($scope, $log){

    $log.info($scope)
}])
// Minified:
// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
// where o will be $scope and n will be $log

// Using $log instead of console.log for testing and debugging.
// myApp.controller('mainController', function($scope, $log){

//     $log.info($scope)
// })
// which minifies into
// var myApp=angular.module("myApp",[]);myApp.controller("mainController",function(n,o){o.info(n)});
// (Which breaks the DI in Angular!!)

/* 
JS can be minified. Go online, put code in minifier and submit.
minifier:https://jscompress.com/

You can also go to https://docs.angularjs.org/api and read under Services.
*/