"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const user_1 = require("./user");
class Worker extends user_1.User {
    constructor(username, age, city, state) {
        super(username, age, city, state);
    }
    takesorders() {
        console.log(this.username + " takes the orders.");
        console.log(this.sayhello());
    }
}
exports.Worker = Worker;
