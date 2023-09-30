// make all TS exports. Add statement.
export {};

class User {
    username: string;
    age: number;
    city: string;
    state: string;

    constructor(username:string, age:number, city:string, state:string) {
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

let welcome = (user:User) => console.log(`Hi ${user.username}, ${user.age}`);

welcome(joe);
welcome(billy);
welcome(cindy);
welcome(raul);