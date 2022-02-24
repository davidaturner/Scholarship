"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, state, age, city) {
        this.name = name;
        this.state = state;
        this.age = age;
        this.city = city;
        console.log("Just created '" + this.name + "'!");
    }
    User.prototype.welcome = function () {
        console.log("Welcome! My is " + this.name + ", " + this.age);
    };
    return User;
}());
var user1 = new User("Joe", "CT", 32, "New Haven");
var user2 = new User("Manny Fresh", "CT", 43, "New Haven");
user1.welcome();
user2.welcome();
console.log("The function used is \r\n" + user2.welcome + "\r\n");
