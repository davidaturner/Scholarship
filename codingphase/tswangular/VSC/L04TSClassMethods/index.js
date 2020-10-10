"use strict";
exports.__esModule = true;
var NOT_SPECIFIED = "Not Specified";
var Userv3a = /** @class */ (function () {
    function Userv3a(name, state, city, age) {
        this.name = name == undefined ? NOT_SPECIFIED : name;
        this.state = state == undefined ? NOT_SPECIFIED : state;
        this.city = city == undefined ? NOT_SPECIFIED : city;
        this.age = age == undefined ? 0 : age;
    }
    Userv3a.prototype.getName = function () {
        return this.name;
    };
    Userv3a.prototype.setName = function (value) {
        this.name = value;
    };
    Userv3a.prototype.getState = function () {
        return this.state;
    };
    Userv3a.prototype.setState = function (value) {
        this.state = value;
    };
    Userv3a.prototype.getCity = function () {
        return this.city;
    };
    Userv3a.prototype.setCity = function (value) {
        this.city = value;
    };
    Userv3a.prototype.getAge = function () {
        return this.age;
    };
    Userv3a.prototype.setAge = function (value) {
        this.age = value;
    };
    return Userv3a;
}());
var Userv3b = /** @class */ (function () {
    // A required parameter cannot follow an optional parameter.
    // constructor(name: string, age?: number, city: string, state: string) {
    // Type string | undefined is cannot be assigned to property of type string
    // constructor(name: string, age: number, city: string, state?: string) {
    function Userv3b(name, state, city, age) {
        this.name = name;
        this.state = state;
        this.city = city == undefined ? NOT_SPECIFIED : city;
        this.age = age == undefined ? 18 : age;
    }
    Userv3b.prototype.getAge = function () {
        return this.state;
    };
    Userv3b.prototype.setAge = function (value) {
        this.age = value;
    };
    return Userv3b;
}());
var userv3_0 = new Userv3a();
userv3_0.setName("Tosser Krempe");
userv3_0.setState("CA");
console.log(userv3_0);
userv3_0.setAge(18);
console.log(userv3_0);
console.log(userv3_0.getName());
var userv3_1 = new Userv3b("Jobim", "CT", "New Haven", 32);
console.log(userv3_1);
// Argument of type null cannot be assigned to parameter of type string
// let userv3_2 new Userv3(null, null, null, null);
// Argument of type undefined cannot not be assigned to parameter of type number.
// let userv3_2 = new Userv3("Bobby McDarrin", undefined, "Boston", "MA");
var userv3_2 = new Userv3b("Joe Santos", "CT", "New Haven");
console.log(userv3_2);
var userv3_3 = new Userv3b("Jobim", "CT");
console.log(userv3_3);
