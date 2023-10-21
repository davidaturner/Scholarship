"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Good morning, ${this.name}.`);
    }
}
// let employeeA = new Employee('Joe Santos');
// employeeA.greet();
let brenda = new Employee('Brenda Foolins');
brenda.greet();
let kappy = new Employee('Kappy Numb');
let linda = new Employee("Linda Starling");
let employees = [brenda, kappy, linda];
class Manager extends Employee {
    constructor(name, employees) {
        super(name);
        this.employees = [];
        this.employees = employees;
    }
    delegateWork() {
        console.log(`I need you to do THIS!`);
    }
}
let manager = new Manager('Joe', employees);
manager.greet();
manager.delegateWork();
