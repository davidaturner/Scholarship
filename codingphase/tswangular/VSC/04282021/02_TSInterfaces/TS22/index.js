"use strict";
exports.__esModule = true;
var user = {
    name: "Joe Santos",
    age: 32,
    city: "New Haven",
    state: "CT"
};
// Use of interface as a data type to
// guarantee strongly typed input parameters.
var welcome = function (user) {
    return console.log("Welcome " + user.name + ", " + user.age + " of " + user.city + ", " + user.state + ".");
};
var signedoff = function (user) { return console.log("Goodbye " + user.name + "!"); };
welcome(user);
signedoff(user);
