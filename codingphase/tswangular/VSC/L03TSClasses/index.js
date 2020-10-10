"use strict";
exports.__esModule = true;
var greeting = function (user) {
    return console.log("Greetings! " + user.name + ", " + user.age + ".");
};
var UserV2 = /** @class */ (function () {
    function UserV2(name, age, city, state) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
        this.greet = function () { return console.log("Hello, " + _this.name + "!"); };
    }
    return UserV2;
}());
var Userv2 = /** @class */ (function () {
    function Userv2(name, age, city, state) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
        this.greet = function () {
            return console.log("Greetings! " + _this.name + " of " + _this.city + ", " + _this.state + ".");
        };
    }
    return Userv2;
}());
var userv2_1 = {
    name: "Joe Santos Cobbler",
    age: 32,
    city: "New Haven",
    state: "CT",
    greet: function () { return console.log("Hello, " + userv2_1.name + "."); }
};
var usrev2_2 = new UserV2("Nana Carson", 24, "Philadelphia", "PA");
var usrev2_3 = new Userv2("Barky Taylor", 17, "Pittsburgh", "PA");
console.log("====================");
userv2_1.greet();
greeting(userv2_1); // Using interface: IUserv2
console.log("====================");
usrev2_2.greet();
console.log("====================");
usrev2_3.greet();
greeting(usrev2_3); // Using interface: IUserv2!
