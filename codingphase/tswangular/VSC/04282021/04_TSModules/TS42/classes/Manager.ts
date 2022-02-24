import { Employee } from './Employee.js';

export class Manager extends Employee {
  constructor(name:string, age:number, 
              city:string|undefined, state:string|undefined) {
    super(name, age, city, state);
  }
  public giveOrder(workerName: string, order:string) {
    console.log("To worker: " + workerName + ". " + order);
  }
}