"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {User, SalariedEmployee} from './employee';
class AcmeSalariedEmployee {
    constructor(name, age, id, empid, email, salary) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.empid = empid;
        this.email = email;
        this.salary = salary;
    }
    login() {
        return { name: this.name, age: this.age, id: this.id
        };
    }
}
let john = new AcmeSalariedEmployee("John", 29, 1, 1001, "jsmite@acme.com", 60000);
let james = new AcmeSalariedEmployee("James", 29, 1, 1001, "jspaeder@acme.com", 60000);
let grant = new AcmeSalariedEmployee("Grant", 29, 1, 1001, "gmotion@acme.com", 60000);
let amy = new AcmeSalariedEmployee("Amy", 29, 1, 1001, "apond@acme.com", 60000);
let employees = [
    new AcmeSalariedEmployee("John", 29, 3, 1003, "jsmite@acme.com", 60000),
    new AcmeSalariedEmployee("James", 39, 2, 1002, "jspaeder@acme.com", 68000),
    new AcmeSalariedEmployee("Grant", 22, 4, 1004, "gmotion@acme.com", 50000),
    new AcmeSalariedEmployee("Amy", 45, 1, 1001, "apond@acme.com", 90000),
];
employees.forEach(e => console.log(e.login()));
