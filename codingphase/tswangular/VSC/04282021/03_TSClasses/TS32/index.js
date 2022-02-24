"use strict";
exports.__esModule = true;
var SomethingFun = /** @class */ (function () {
    function SomethingFun(message) {
        this.message = message;
    }
    SomethingFun.prototype.getMessage = function () {
        return this.message;
    };
    SomethingFun.prototype.setMessage = function (message) {
        this.message = message;
    };
    SomethingFun.prototype.print = function () {
        console.log("Let's do " + this.message + " fun!");
    };
    return SomethingFun;
}());
var someone = new SomethingFun("someone");
someone.print();
var something = new SomethingFun("something");
console.log("Let's do " + something.getMessage() + " fun!");
