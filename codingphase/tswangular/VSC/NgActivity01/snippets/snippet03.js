"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Joe Santos",
    age: 32,
    city: "New Haven",
    state: "CT",
};
var login = function (user) {
    return console.log("Welcome " + user.name + ", " + user.age + " of " + user.city + ", " + user.state + ".");
};
var logout = function (user) { return console.log("Goodbye " + user.name + "!"); };
login(user);
logout(user);
