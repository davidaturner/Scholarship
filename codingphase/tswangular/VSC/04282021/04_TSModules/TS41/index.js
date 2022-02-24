class Employee {
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
function welcome(name, age) {
    console.log(`Hello ${name}, ${age}!`);
}
class Manager extends Employee {
    constructor(name, age, city, state) {
        super(name, age, city, state);
    }
    giveOrder(workerName, order) {
        console.log("To worker: " + workerName + ". " + order);
    }
}
class Worker extends Employee {
    constructor(name, age, city, state) {
        super(name, age, city, state);
    }
    doesTask(managerName) {
        console.log("To manager: Yessir, Mr. " + managerName + ". Right away!");
    }
}
let user1 = new Worker("Joe", 28, "New Haven", "CT");
user1.welcome();
let user2 = new Manager("Bob", 28, "Pittsburgh", "PA");
welcome(user2.Name, user2.Age);
user2.giveOrder(user1.Name, "Make the coffee!");
user1.doesTask(user2.Name);
export {};
