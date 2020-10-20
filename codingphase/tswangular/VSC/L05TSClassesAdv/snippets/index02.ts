export {};

// Like Java, interface has only public
// members.
interface NameInterface {
  firstname : string;
  lastname : string;
  age? : number;
  fullname() : string;
  // fullnameAge() : string;
};

const missingcity : string = "(Missing City)";
const missingstate : string = "(Missing State)";

class User implements NameInterface {
  constructor(
    public firstname: string, 
    public lastname: string,
    public age?: number,
    private city?: string,
    private state?: string
  ) 
  {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age == undefined? 0 : age;
    this.city = city == undefined? missingcity : city;
    this.state = state == undefined? missingstate : state;
  }

  fullname() : string {
    return (this.age == 0)? 
                        this.firstname + " " + this.lastname:
                        this.fullnameAge();
  }

  private fullnameAge() : string {
    return this.firstname + " " + this.lastname + ", " + this.age;
  }

  getCity() {
    return this.city;
  }
  setCity(city: string) {
    this.city = city;
  }

  getState() {
    return this.state;
  }
  setState(state: string) {
    this.state = state;
  }

  fullAddress() : string {
    return this.fullnameAge() + " of " + this.city + ", " + this.state;
  }
};

const managerrole: string = "Manager";
const workerrole : string = "Worker";

class Worker extends User {
  private busy : Boolean = false;
  constructor(firstname: string, lastname : string, 
              protected role : string, 
              age?: number) {
    super(firstname, lastname, age);
    this.role = role;
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

class Manager extends Worker {
  constructor(firstname: string, lastname:string, age?:number) {
    super(firstname, lastname, managerrole, age);
  }

  orderTaskTo(worker : Worker) : void {
    console.log(`'${this.lastname}' gives '${worker.firstname}' an order.`);
  }
}

let worker1 = new Worker("Johnny", "Cash", workerrole);
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
worker1.printReady();