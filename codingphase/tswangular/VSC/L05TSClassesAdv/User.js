"use strict";
exports.__esModule = true;
;
exports.missingcity = "(Missing City)";
exports.missingstate = "(Missing State)";
var User = /** @class */ (function () {
    function User(firstname, lastname, age, city, state) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
        this.state = state;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age == undefined ? 0 : age;
        this.city = city == undefined ? exports.missingcity : city;
        this.state = state == undefined ? exports.missingstate : state;
    }
    User.prototype.fullname = function () {
        return (this.age == 0) ?
            this.firstname + " " + this.lastname :
            this.fullnameAge();
    };
    User.prototype.fullnameAge = function () {
        return this.firstname + " " + this.lastname + ", " + this.age;
    };
    User.prototype.getCity = function () {
        return this.city;
    };
    User.prototype.setCity = function (city) {
        this.city = city;
    };
    User.prototype.getState = function () {
        return this.state;
    };
    User.prototype.setState = function (state) {
        this.state = state;
    };
    User.prototype.fullAddress = function () {
        return this.fullnameAge() + " of " + this.city + ", " + this.state;
    };
    return User;
}());
exports.User = User;
;
