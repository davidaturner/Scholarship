// make all TS exports. Add statement.
export {};

class User {
    // private
    private username: string;

    age: number = 0;

    // optional parameters
    city: string | undefined;
    state?: string;

    // must make optional on constructor.
    constructor(username:string, age:number, city?:string, state?:string) {
        this.username = username;
        this.age = age;
        this.city = city == undefined? "(missing city)" : city;
        this.state = state;
    }

    // public is default. optional label.
    public welcome = () => console.log(this.hello(this.username));
    // private only accessible within class.
    private hello(username:string) {
        return `Hi ${username}`;
    }
    private helloage(username:string, age:number) {
        return `${this.hello(username)}, ${age}`;
    }
    // with optional parameters
    private from(city?:string, state?:string){
        if (city != undefined && state != undefined) {
            return `from ${city}, ${state}`;
        } else {
            if (city != undefined) {
                return `from ${city}`;
            }
            if (state != undefined) {
                return `from ${state}`;
            }
        }
        return ``;
    }

    public fullwelcome = () => console.log(
                            this.helloage(this.username, this.age) + " " + 
                            this.from(this.city, this.state) );
    // public fullwelcome = () => console.log(`Hi ${this.username}, ${this.age} from ${this.city}, ${this.state}`);

    public doubleage = () => this.age * 2;
}

let city;
let state="New York";

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
