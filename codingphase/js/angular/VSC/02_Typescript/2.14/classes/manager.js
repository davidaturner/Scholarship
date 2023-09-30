"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const user_1 = require("./user");
class Manager extends user_1.User {
    constructor(username, age, city, state) {
        super(username, age, city, state);
    }
    giveorders() {
        console.log(this.username + " gives the orders.");
    }
}
exports.Manager = Manager;
