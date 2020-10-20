"use strict";
exports.__esModule = true;
function printv1(name) {
    console.log(name);
}
printv1("Joe");
var printv2 = function (name) {
    console.log(name);
};
printv2("Mark");
var printv3 = function (name, age, location) { return console.log(name); };
printv3("Perri", 32, "London");
var printv4 = function (name) { return console.log(name); };
printv4("Carl");
var double = function (number) { return number * 2; };
console.log(double(8));
var printv5 = function (name) { console.log(name); };
var doublev2 = function (number) { return number * 2; };
printv5("Michael");
console.log(doublev2(16));
