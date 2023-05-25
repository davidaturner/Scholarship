"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, age, city, state) {
        this.welcome = () => console.log(`Hi ${this.username}, ${this.age}`);
        this.doubleage = () => this.age * 2;
        this.username = username;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
let joe = new User("Joe", 31, "New York City", "New York");
let billy = new User("Billy", 28, "New York City", "New York");
let cindy = new User("Cindy", 22, "New York City", "New York");
let raul = new User("Raul", 19, "New York City", "New York");
// let welcome = (user:User) => console.log(`Hi ${user.username}, ${user.age}`);
joe.welcome();
billy.welcome();
cindy.welcome();
raul.welcome();
console.log(raul.doubleage());
