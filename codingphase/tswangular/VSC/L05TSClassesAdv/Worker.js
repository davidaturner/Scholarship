"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User_1 = require("./User");
exports.workerrole = "Worker";
exports.managerrole = "Manager";
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(firstname, lastname, age) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.role = exports.workerrole;
        _this.busy = false;
        _this.busy = false;
        return _this;
    }
    ;
    Worker.prototype.isBusy = function () {
        return this.busy;
    };
    Worker.prototype.setBusy = function (value) {
        this.busy = value;
    };
    Worker.prototype.printReady = function () {
        if (this.isBusy() == true) {
            console.log("Worker is busy.");
        }
        else {
            if (this.isManager() == true) {
                console.log("Manager '" + this.lastname + "' is Ready for Orders.");
            }
            else {
                console.log("Worker '" + this.lastname + "' is Ready for Orders.");
            }
        }
    };
    Worker.prototype.doTask = function () {
        this.busy = true;
        console.log("Worker begins task.");
    };
    ;
    Worker.prototype.completeTask = function () {
        this.busy = false;
        console.log("Worker completes task!");
    };
    Worker.prototype.isManager = function () {
        return (this.role == exports.managerrole);
    };
    return Worker;
}(User_1.User));
exports.Worker = Worker;
;
