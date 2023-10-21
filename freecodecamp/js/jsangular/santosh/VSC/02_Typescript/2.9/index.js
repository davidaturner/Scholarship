"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getEmployeeId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeRole() {
        return "Employee";
    }
}
_Employee_id = new WeakMap();
let tami = new Employee(1, "tami", {
    street: "1313 Mockingbird Ln",
    city: "Pittsburgh",
    zip: "15223-4433",
    email: "tamiflu@gmail.com"
});
let joe = {
    name: "John",
    age: 26,
    id: 1,
    email: "johnsmith@email.com"
};
// object deconstructing.
let { name: username, age, id, email } = joe;
console.log(username);
console.log(age);
console.log(id);
console.log(email);
let crabb = {
    name: "Crabb",
    age: 39,
    id: 10,
    email: "crabbbob@email.com",
    salary: 20000
};
// spread
let [userj, userc, ...restOfTheUsers] = [
    joe,
    crabb,
    { name: "smiley", age: 32, id: 100, email: "smileytodd@gmail.com" },
    { name: "pawpau", age: 31, id: 101, email: "pawpauolink@gmail.com" }
];
console.log(userj);
console.log(userc);
console.log(restOfTheUsers);
// filter
let result = restOfTheUsers.filter((user) => user.id > 100);
