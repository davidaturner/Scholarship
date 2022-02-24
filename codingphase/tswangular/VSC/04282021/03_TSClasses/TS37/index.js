class User {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
        this.name = name;
        // this.name = name == undefined? "(Missing Name)" : name;
        this.age = (age == undefined) ? 0 : age;
        this.city = (city == undefined) ? "(Missing City)" : city;
        this.state = (state == undefined) ? "(Missing State)" : state;
        this.signedoff(); // private to just this class, not the interface.
    }
    welcome() {
        console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`);
    }
    signedoff() {
        console.log(`Goodbye, ${this.name}.`);
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
}
let user1 = new User("Joe", 28, "New Haven", "CT");
user1.welcome();
user1.Name = "Joseph";
console.log(user1.Name + ", " + user1.Age);
let user2 = new User("Bob");
console.log(user2.Name + ", Age: " + user2.Age);
export {};
