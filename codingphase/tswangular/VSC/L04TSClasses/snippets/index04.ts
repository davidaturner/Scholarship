export {};

// Setting User name as public. All others are private.
class User {
  name: string = "(Missing Name)";
  private state: string;
  private age: number;
  private city: string;

  // Setting constructor to optional params.
  //   constructor(name: string, state: string, age: number, city: string) {
  //   this.name = name;
  //   this.state = state;
  //   this.age = age;
  //   this.city = city;
  // //   console.log(`Just created '${this.name}'!`);
  //  }
  constructor(name: string, state?: string, age?: number, city?: string) {
    this.name = name;
    this.city = (city == undefined)? "(Missing City)" : city;
    this.age = (age == undefined)? this.age : age;
    this.state = (state == undefined)? "(Missing State)" : state;
    this.welcome();
   }

  printName() {
    console.log(`${this.name}, ${this.age}`)
  }

  doubleAge() {
    return this.age * 2;
  }

  // Making welcome() private.
  private welcome() {
    console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`)
  }
  signedoff() {
    console.log(`Goodbye, ${this.name}.`);
  }
}

let user1 = new User("Joe", "CT", 32, "New Haven");
user1.signedoff();
// console.log(user1.city + ", " + user1.state);

let user2 = new User("Manny Fresh");
console.log(user2.name);
