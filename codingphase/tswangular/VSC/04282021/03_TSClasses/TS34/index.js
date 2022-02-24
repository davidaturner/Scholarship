"use strict";
exports.__esModule = true;
// Setting User name as public. All others are private.
var User = /** @class */ (function () {
    // Setting constructor to optional params.
    //   constructor(name: string, state: string, age: number, city: string) {
    //   this.name = name;
    //   this.state = state;
    //   this.age = age;
    //   this.city = city;
    // //   console.log(`Just created '${this.name}'!`);
    //  }
    function User(name, state, age, city) {
        this.name = "(Missing Name)";
        this.name = name;
        this.city = (city == undefined) ? "(Missing City)" : city;
        this.age = (age == undefined) ? 0 : age;
        this.state = (state == undefined) ? "(Missing State)" : state;
        this.welcome();
    }
    User.prototype.printName = function () {
        console.log(this.name + ", " + this.age);
    };
    User.prototype.doubleAge = function () {
        return this.age * 2;
    };
    // Making welcome() private.
    User.prototype.welcome = function () {
        console.log("Welcome, " + this.name + "! You are from " + this.city + ", " + this.state + " and you are " + this.age + " years old.");
    };
    User.prototype.signedoff = function () {
        console.log("Goodbye, " + this.name + ".");
    };
    return User;
}());
var user1 = new User("Joe", "CT", 32, "New Haven");
user1.signedoff();
// console.log(user1.city + ", " + user1.state);
var user2 = new User("Manny Fresh");
console.log(user2.name);
