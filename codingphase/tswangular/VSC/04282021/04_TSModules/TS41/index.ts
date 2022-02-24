export {};

interface EmployeeInterface {
  name: string;
  age: number;
  // city?: string; not public cannot be part of interface
  state?: string;
  welcome() : void;
  signedoff() : void; 
}

class Employee implements EmployeeInterface {

  constructor(
    public name: string, 
    public age:  number,
    private city?: string, 
    public state?: string) 
    {
      this.name = name;
      this.age = age;
      this.city = (city == undefined)? "(Missing City)" : city;
      this.state = (state == undefined)? "(Missing State)" : state;
      this.hellowho();
    }

  welcome() {
    console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`)
  }

  signedoff() {
    console.log(`Goodbye, ${this.name}.`);
  }

  private hellowho() {
    console.log(`Hello. May I help you, ${this.name}?`)
  }

  get Name() {
    return this.name;
  }

  set Name(value:string) {
    this.name = value;
  }

  get Age() : number | undefined {
    return (this.age == undefined)? 0 : this.age;
  }

  set Age(value:number | undefined) {
    this.age = (value == undefined)? 0 : value;
  }

  get State() : string | undefined {
    return (this.state == undefined)? "(Missing State)" : this.state;
  }

  set State(value:string | undefined) {
    this.state = (value == undefined)? "(Missing State)" : value;
  }
}

function welcome(name:string, age: number|undefined) : void {
  console.log(`Hello ${name}, ${age}!`)
}

class Manager extends Employee {
  constructor(name:string, age:number, 
              city:string|undefined, state:string|undefined) {
    super(name, age, city, state);
  }
  public giveOrder(workerName: string, order:string) {
    console.log("To worker: " + workerName + ". " + order);
  }
}

class Worker extends Employee {
  constructor(name:string, age:number, 
              city:string|undefined, state:string|undefined) {
    super(name, age, city, state);
  }
  public doesTask(managerName:string) {
    console.log("To manager: Yessir, Mr. " + managerName + ". Right away!");
  }
}

let user1 = new Worker("Joe", 28, "New Haven", "CT");
user1.welcome();

let user2 = new Manager("Bob", 28, "Pittsburgh", "PA");
welcome(user2.Name, user2.Age);

user2.giveOrder(user1.Name, "Make the coffee!");
user1.doesTask(user2.Name);
