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
var Worker_1 = require("./Worker");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstname, lastname, age) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.role = Worker_1.managerrole;
        return _this;
    }
    Manager.prototype.orderTaskTo = function (worker) {
        console.log("'" + this.lastname + "' gives '" + worker.firstname + "' an order.");
    };
    Manager.prototype.saysThanks = function () {
        console.log("Manager says Thanks!");
    };
    return Manager;
}(Worker_1.Worker));
exports.Manager = Manager;
