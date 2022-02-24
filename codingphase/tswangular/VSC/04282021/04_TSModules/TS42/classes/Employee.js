export class Employee {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
        this.name = name;
        this.age = age;
        this.city = (city == undefined) ? "(Missing City)" : city;
        this.state = (state == undefined) ? "(Missing State)" : state;
        this.hellowho();
    }
    welcome() {
        console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`);
    }
    signedoff() {
        console.log(`Goodbye, ${this.name}.`);
    }
    hellowho() {
        console.log(`Hello. May I help you, ${this.name}?`);
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Age() {
        return (this.age == undefined) ? 0 : this.age;
    }
    set Age(value) {
        this.age = (value == undefined) ? 0 : value;
    }
    get State() {
        return (this.state == undefined) ? "(Missing State)" : this.state;
    }
    set State(value) {
        this.state = (value == undefined) ? "(Missing State)" : value;
    }
}
