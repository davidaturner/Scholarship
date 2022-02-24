import { Employee } from './Employee.js';

export class Worker extends Employee {
  constructor(name:string, age:number, 
              city:string|undefined, state:string|undefined) {
    super(name, age, city, state);
  }
  public doesTask(managerName:string) {
    console.log("To manager: Yessir, Mr. " + managerName + ". Right away!");
  }
}