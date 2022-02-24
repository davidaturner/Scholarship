export {};

interface UserInterface {
  name?: string;
  age?: number;
  // city?: string; not public cannot be part of interface
  // state?: string; not public cannot be part of interface
  welcome() : void;
  // signedoff() : void; 
}

class User implements UserInterface {

  constructor(
    public name: string, 
    public age?:  number,
    private city?: string, 
    private state?: string) 
    {
      this.name = name;
            // this.name = name == undefined? "(Missing Name)" : name;
      this.age = (age == undefined)? 0 : age;
      this.city = (city == undefined)? "(Missing City)" : city;
      this.state = (state == undefined)? "(Missing State)" : state;
      this.signedoff(); // private to just this class, not the interface.
    }

  welcome() {
    console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`)
  }

  private signedoff() {
    console.log(`Goodbye, ${this.name}.`);
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
}

let user1 = new User("Joe", 28, "New Haven", "CT");
user1.welcome();
user1.Name = "Joseph";
console.log(user1.Name + ", " + user1.Age);

let user2 = new User("Bob");
console.log(user2.Name + ", Age: " + user2.Age);
