export {};

var NOT_SPECIFIED = "Not Specified";

interface IUserv3 {
  name: string;
  age?: number;
  city: string;
  // private modifier cannot appear on a type member
  //  private state: string;
  state: string;
}

class Userv3a {
  private name: string;
  private age: number;
  private city: string;
  private state: string;

  constructor(name?: string, state?: string, city?: string, age?: number) {
    this.name = name == undefined ? NOT_SPECIFIED : name;
    this.state = state == undefined ? NOT_SPECIFIED : state;
    this.city = city == undefined ? NOT_SPECIFIED : city;
    this.age = age == undefined ? 0 : age;
  }

  getName() {
    return this.name;
  }
  setName(value: string) {
    this.name = value;
  }
  getState() {
    return this.state;
  }
  setState(value: string) {
    this.state = value;
  }
  getCity() {
    return this.city;
  }
  setCity(value: string) {
    this.city = value;
  }
  getAge() {
    return this.age;
  }
  setAge(value: number) {
    this.age = value;
  }
}

class Userv3b implements IUserv3 {
  name: string;
  age: number;
  city: string;
  // Property 'state is not assignable to same in base type.
  //   state?: string;
  state: string;

  // A required parameter cannot follow an optional parameter.
  // constructor(name: string, age?: number, city: string, state: string) {

  // Type string | undefined is cannot be assigned to property of type string
  // constructor(name: string, age: number, city: string, state?: string) {

  constructor(name: string, state: string, city?: string, age?: number) {
    this.name = name;
    this.state = state;
    this.city = city == undefined ? NOT_SPECIFIED : city;
    this.age = age == undefined ? 18 : age;
  }

  getAge() {
    return this.state;
  }

  setAge(value: number) {
    this.age = value;
  }
}

let userv3_0 = new Userv3a();
userv3_0.setName("Tosser Krempe");
userv3_0.setState("CA");

console.log(userv3_0);
userv3_0.setAge(18);
console.log(userv3_0);
console.log(userv3_0.getName());

let userv3_1 = new Userv3b("Jobim", "CT", "New Haven", 32);
console.log(userv3_1);

// Argument of type null cannot be assigned to parameter of type string
// let userv3_2 new Userv3(null, null, null, null);

// Argument of type undefined cannot not be assigned to parameter of type number.
// let userv3_2 = new Userv3("Bobby McDarrin", undefined, "Boston", "MA");

let userv3_2 = new Userv3b("Joe Santos", "CT", "New Haven");
console.log(userv3_2);

let userv3_3 = new Userv3b("Jobim", "CT");
console.log(userv3_3);
