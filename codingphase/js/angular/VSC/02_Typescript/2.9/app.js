"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // must make optional on constructor.
    constructor(username, age, city, state) {
        this.age = 0;
        // public is default. optional label.
        this.welcome = () => console.log(this.hello(this.username));
        this.fullwelcome = () => console.log(this.helloage(this.username, this.age) + " " +
            this.from(this.city, this.state));
        // public fullwelcome = () => console.log(`Hi ${this.username}, ${this.age} from ${this.city}, ${this.state}`);
        this.doubleage = () => this.age * 2;
        this.username = username;
        this.age = age;
        this.city = city == undefined ? "(missing city)" : city;
        this.state = state;
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
let lennon = new User("Lennon", 67);
// public
// joe.username = "Billy";
// joe.welcome();
// joe.hello("Tommy");
joe.fullwelcome();
kaitlin.fullwelcome();
pete.fullwelcome();
lennon.fullwelcome();
console.log(`${lennon.city} ${lennon.state}`);
