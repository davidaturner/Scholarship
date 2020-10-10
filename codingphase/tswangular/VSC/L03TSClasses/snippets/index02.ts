export {};

interface IUserv2 {
  name: string;
  age: number;
  city: string;
  state: string;
  greet(): any;
}

let greeting = (user: IUserv2) =>
  console.log(`Greetings! ${user.name}, ${user.age}.`);

class UserV2 {
  name: string;
  age: number;
  city: string;
  state: string;
  greet: any;

  constructor(name: string, age: number, city: string, state: string) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.state = state;
    this.greet = () => console.log(`Hello, ${this.name}!`);
  }
}

class Userv2 implements IUserv2 {
  name: string;
  age: number;
  city: string;
  state: string;
  greet: any;

  constructor(name: string, age: number, city: string, state: string) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.state = state;
    this.greet = () =>
      console.log(`Greetings! ${this.name} of ${this.city}, ${this.state}.`);
  }
}

let userv2_1 = {
  name: "Joe Santos Cobbler",
  age: 32,
  city: "New Haven",
  state: "CT",
  greet: () => console.log("Hello, " + userv2_1.name + "."),
};
let usrev2_2 = new UserV2("Nana Carson", 24, "Philadelphia", "PA");
let usrev2_3 = new Userv2("Barky Taylor", 17, "Pittsburgh", "PA");

console.log("====================");
userv2_1.greet();
greeting(userv2_1); // Using interface: IUserv2

console.log("====================");
usrev2_2.greet();

console.log("====================");
usrev2_3.greet();
greeting(usrev2_3); // Using interface: IUserv2!
