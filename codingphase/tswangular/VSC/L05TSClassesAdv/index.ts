import { Worker, workerrole } from './Worker'
import { Manager } from './Manager'

// Testing
let worker1 = new Worker("Johnny", "Cash");
worker1.setCity("Pittsburgh");
worker1.setState("PA");
//console.log(worker1.fullname());
worker1.age = 66;
//console.log(worker1.fullname());
//console.log(worker1.fullAddress());
worker1.printReady();

let manager1 = new Manager("Perry", "Lauder", 22);
manager1.printReady();
manager1.orderTaskTo(worker1);
console.log(`Is Worker '${worker1.lastname}' Busy? ${worker1.isBusy()}`);
worker1.doTask();
console.log(`Is Worker '${worker1.lastname}' NOW Busy? ${worker1.isBusy()}`);
worker1.completeTask();
console.log(`Is Worker '${worker1.lastname}' NOW Busy? ${worker1.isBusy()}`);
manager1.saysThanks();
worker1.printReady();

export {};