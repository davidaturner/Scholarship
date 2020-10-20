import { User } from './User'

export const workerrole : string = "Worker";
export const managerrole: string = "Manager";

export class Worker extends User {
  protected role : string = workerrole; 
  private busy : Boolean = false;
  constructor(firstname: string, lastname : string, 
              age?: number) {
    super(firstname, lastname, age);
    this.busy = false;
  };

  isBusy() : Boolean {
    return this.busy;
  }

  setBusy(value: Boolean) {
    this.busy = value;
  }

  printReady() : void {
    if (this.isBusy()==true) {
      console.log(`Worker is busy.`)
    } else {
      if (this.isManager()==true) {
        console.log(`Manager '${this.lastname}' is Ready for Orders.`);
      } else {
        console.log(`Worker '${this.lastname}' is Ready for Orders.`);
      }
    }
  }

  doTask() : void {
    this.busy = true;
    console.log("Worker begins task.");
  };

  completeTask() : void {
    this.busy = false;
    console.log("Worker completes task!");
  }

  isManager() : Boolean {
    return (this.role == managerrole);
  }
};
