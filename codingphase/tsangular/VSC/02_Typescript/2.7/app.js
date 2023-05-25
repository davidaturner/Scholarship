"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, age, city, state) {
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
let welcome = (user) => console.log(`Hi ${user.username}, ${user.age}`);
welcome(joe);
welcome(billy);
welcome(cindy);
welcome(raul);
