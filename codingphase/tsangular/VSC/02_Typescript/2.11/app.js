"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, age, city, state) {
        this.username = username;
        this.age = age;
        this.city = city;
        this.state = state;
        // public is default. optional label.
        this.welcome = () => console.log(this.hello(this.username));
        this.fullwelcome = () => console.log(this.helloage(this.username, this.age) + " " +
            this.from(this.city, this.state));
        // public fullwelcome = () => console.log(`Hi ${this.username}, ${this.age} from ${this.city}, ${this.state}`);
        this.doubleage = () => this.age == undefined ? 0 : this.age * 2;
        this.username = username == undefined ? "(missing username)" : username;
        this.age = age == undefined ? 0 : age;
        this.city = city; // undefined not console.logged
        this.state = state; // undefined not console.logged
    }
    // getters and setters for username and age
    get Username() {
        return this.username;
    }
    set Username(value) {
        this.username = value;
    }
    // getAge?() {             // cannot call a function that might be optional
    //     return this.age;
    // }
    // get Age() {          // cannot use for optional parameters
    //     return this.age;
    // }
    set Age(value) {
        this.age = value;
    }
    // private only accessible within class.
    hello(username) {
        return `Hi ${username}`;
    }
    helloage(username, age) {
        return `${this.hello(username)}, ${age}`;
    }
    // with optional parameters
    from(city, state) {
        if (city != undefined && state != undefined) {
            return `from ${city}, ${state}`;
        }
        else {
            if (city != undefined) {
                return `from ${city}`;
            }
            if (state != undefined) {
                return `from ${state}`;
            }
        }
        return ``;
    }
}
let city;
let state = "New York";
let joe = new User("Joe", 31, "New York City", "New York");
let kaitlin = new User("Kaitlin", 22, "New York City");
let pete = new User("Pete", 47, city, state);
let lennon = new User("Lennon");
// lennon.username = "Lennon";
// let lennon = new User("Lennon", 67);
// public
// joe.username = "Billy";
// joe.welcome();
// joe.hello("Tommy");
joe.fullwelcome();
kaitlin.fullwelcome();
pete.fullwelcome();
lennon.fullwelcome();
console.log(`${lennon.city} ${lennon.state}`);
joe.Username = "Tomtom";
console.log(joe.Username);
joe.Age = 32;
console.log(joe);
