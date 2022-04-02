export {};

// Setting User name as public. All others are private.
class User {
  // name: string = "(Missing Name)";
  // private state: string;
  // private age: number;
  // private city: string;

  constructor(
    public name: string, 
    private age?:  number,
    private city?: string, 
    private state?: string) 
    {
      this.name = name == undefined? "(Missing Name)" : name;
      this.age = (age == undefined)? 0 : age;
      this.city = (city == undefined)? "(Missing City)" : city;
      this.state = (state == undefined)? "(Missing State)" : state;
      this.welcome();
    }

    // To get accessors to Compile, update package.json script "start"
    // tsc --target ES2016 index.ts && node index.js
    // THEN, add "type" : "module" in the package.json.
    get Name() {
      return this.name;
    }

    set Name(value: string) {
      this.name = value;
    }

    get Age() {
      return this.age;
    };

    set Age(value: number) {
      this.age = value;
    }

    get City() {
      return this.city;
    };

    set City(value: string) {
      this.city = value;
    }


    get State() {
      return this.state;
    };

    set State(value: string) {
      this.state = value;
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

let user1 = new User("Joe", 28, "New Haven", "CT");
user1.signedoff();
// console.log(user1.city + ", " + user1.state);

// Use getters and setters
let user2 = new User("Manny Fresh");
console.log(user2.name);
user2.Age = 13;
user2.City = "New Hope";
user2.State = "PA";
//console.log("Age Set: " + user2.Age + " City Set: " + user2.City + ", " + user2.State);
console.log(`Welcome, ${user2.Name}! You are from ${user2.City}, ${user2.State} and you are ${user2.Age} years old.`)
  