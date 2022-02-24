import { Employee } from './Employee.js';
export class Worker extends Employee {
    constructor(name, age, city, state) {
        super(name, age, city, state);
    }
    doesTask(managerName) {
        console.log("To manager: Yessir, Mr. " + managerName + ". Right away!");
    }
}
