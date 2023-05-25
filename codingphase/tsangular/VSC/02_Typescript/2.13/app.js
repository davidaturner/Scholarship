"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(// parameters can be public or private.
    username, age, 
    // public age?:number,
    city, state) {
        this.username = username;
        this.age = age;
        this.city = city;
        this.state = state;
        this.welcome = () => console.log(this.hello(this.username));
        this.fullwelcome = () => console.log(this.helloage(this.username, this.age) + " " +
            this.from(this.city, this.state));
        this.sayhello = () => this.hello(this.username);
        this.doubleage = () => this.age == undefined ? 0 : this.age * 2;
        this.username = username == undefined ? "(missing username)" : username;
        this.age = age == undefined ? 0 : age;
        this.city = city == undefined ? "(missing city)" : city;
        this.state = state; // undefined not console.logged
    }
    // getters and setters for username and age
    get Username() {
        return this.username;
    }
    set Username(value) {
        this.username = value;
    }
    get Age() {
        return this.age == undefined ? 0 : this.age;
    }
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
class Manager extends User {
    constructor(username, age, city, state) {
        super(username, age, city, state);
    }
    giveorders() {
        console.log(this.username + " gives the orders.");
    }
}
let billy = new Manager("Billy", 32, "New York City", "New York");
billy.fullwelcome();
billy.giveorders();
class Worker extends User {
    constructor(username, age, city, state) {
        super(username, age, city, state);
    }
    takesorders() {
        console.log(this.username + " takes the orders.");
        console.log(this.sayhello());
    }
}
let momer = new Worker("Momer", 47, "Chicago", "Illinois");
momer.fullwelcome();
momer.takesorders();
