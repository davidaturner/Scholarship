import { Employee } from './Employee.js';
export class Manager extends Employee {
    constructor(name, age, city, state) {
        super(name, age, city, state);
    }
    giveOrder(workerName, order) {
        console.log("To worker: " + workerName + ". " + order);
    }
}
