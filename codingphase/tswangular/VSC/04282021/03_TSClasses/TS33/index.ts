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
    console.log(`Just created '${this.name}'!`);
  }

  welcome() {
    console.log(`Welcome! My is ${this.name}, ${this.age}`);
  }

}
let user1 = new User("Joe", "CT", 32, "New Haven");
let user2 = new User("Manny Fresh", "CT", 43, "New Haven");

user1.welcome();
user2.welcome();

console.log(`The function used is \r\n${user2.welcome}.\r\n`);