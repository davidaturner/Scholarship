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
class Employee {
    constructor(id, name) {
        _Employee_id.set(this, void 0); //private id : number;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    get Id() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    get Name() {
        return this.name;
    }
    toString() {
        return `${__classPrivateFieldGet(this, _Employee_id, "f")}: ${this.name}`;
    }
    static hello(thing) {
        return `Hello, ${thing}!`;
    }
}
_Employee_id = new WeakMap();
let colby = new Employee(1, "Colby Bill");
console.log(colby.Id);
console.log(colby.Name);
// console.log(colby.#id)      // not accessible outside of the class. private.
// console.log(colby.#name)    // not accessible outside of the class. private.
class Manager extends Employee {
    constructor(id, name, employees) {
        super(id, name);
        this.employees = employees;
    }
    toString() {
        let str = super.toString() + " Employees -";
        for (let employee of this.employees) {
            str += " " + employee.toString();
        }
        // for(let employee in this.employees) {
        //     str += " " + this.employees[employee].toString();
        // }
        return str;
    }
    get Employees() {
        return this.employees;
    }
}
let martha = new Employee(10, "Martha Midear");
let sonya = new Employee(11, "Sonya Blade");
let carl = new Employee(12, "Carl Mathers");
let jacksEmployees = [martha, sonya, carl];
let jack = new Manager(21, "Jack Olantern", jacksEmployees);
console.log(jack.Id);
console.log(jack.Name);
jack.Employees.forEach(e => console.log(e.toString()));
console.log(jack.toString()); // overloaded
// static function
console.log(Employee.hello("World"));
