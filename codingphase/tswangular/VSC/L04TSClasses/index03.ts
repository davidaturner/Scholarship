export {};

class User {
  name: string;
  state: string;
  age: number;
  city: string;

  constructor(name: string, state: string, age: number, city: string) {
    this.name = name;
    this.state = state;
    this.age = age;
    this.city = city;
  //   console.log(`Just created '${this.name}'!`);
   }

  printName() {
    console.log(`${this.name}, ${this.age}`)
  }

  doubleAge() {
    return this.age * 2;
  }

  welcome() {
    console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`)
  }
  signedoff() {
    console.log(`Goodbye, ${this.name}.`);
  }
}

let welcome = (user) => {
  console.log(`Welcome, ${user.name}! You are from ${user.city}, ${user.state} and you are ${user.age} years old.`)
}
let signedoff = (user) => {
  console.log(`Goodbye, ${user.name}.`);
}

let user1 = new User("Joe", "CT", 32, "New Haven");
user1.welcome();
user1.signedoff();

let user2 = new User("Manny Fresh", "CT", 43, "New Haven");
welcome(user2);