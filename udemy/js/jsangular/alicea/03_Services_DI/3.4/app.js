// drop in ngMessages dependency
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// Using $log instead of console.log for testing and debugging.
myApp.controller('mainController', function($scope, $log, $filter, $resource){

})

/* 
Examples of variables provided by AngularJS (as seen in the open source file.

You can get more modules at https://docs.angularjs.org/api by the sidebar.
*/