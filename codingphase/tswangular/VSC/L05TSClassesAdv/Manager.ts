import { Worker, managerrole } from './Worker'

export class Manager extends Worker {
  constructor(firstname: string, lastname:string, age?:number) {
    super(firstname, lastname, age);
    this.role = managerrole;
  }

  orderTaskTo(worker : Worker) : void {
    console.log(`'${this.lastname}' gives '${worker.firstname}' an order.`);
  }

  saysThanks() : void {
      console.log(`Manager says Thanks!`);
  }
}

