"use strict";
exports.__esModule = true;
var something = {
    name: "something"
};
var someone = {
    name: "someone"
};
var welcome = function (something) {
    return console.log("Lets do " + something.name + " fun!");
};
var signedoff = function (something) { return console.log("Lets do " + something.name + " fun!"); };
welcome(something);
signedoff(someone);
var somethingFun = "Lets do something fun!";
console.log(somethingFun);
