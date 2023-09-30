// make all TS exports. Add statement.
export {};

interface UserInterface {
    username: string;   // parameters cannot be private.
    // age?: number;    // do not include into interface.
    city?: string;
    state?: string;
    
    // welcome(): void;
    // fullwelcome(): void;
}

interface WelcomeFunctionality {
    welcome(): void;
    fullwelcome(): void;   
}

class User implements UserInterface, WelcomeFunctionality {
    constructor(                // parameters can be public or private.
        public username:string,
        private age?:number, 
        // public age?:number,
        public city?:string, 
        public state?:string) 
        {
            this.username = username == undefined? "(missing username)" : username;
            this.age = age == undefined? 0 : age;
            this.city = city == undefined?"(missing city)": city;
            this.state = state; // undefined not console.logged
        }

    // getters and setters for username and age
    get Username() {
        return this.username;
    }

    set Username(value:string) {
        this.username = value;
    }

    get Age() {
        return this.age == undefined?0:this.age;
    }
    // getAge?() {             // cannot call a function that might be optional
    //     return this.age;
    // }
    // get Age() {          // cannot use for optional parameters
    //     return this.age;
    // }


    set Age(value:number) {
        this.age = value;
    }

    // implement WelcomeFunctionality
    welcome = () => console.log(this.hello(this.username));
    fullwelcome = () => console.log(
                            this.helloage(this.username, this.age) + " " + 
                            this.from(this.city, this.state) );

    // private only accessible within class.
    private hello(username?:string) {
        return `Hi ${username}`;
    }
    private helloage(username?:string, age?:number) {
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

    public doubleage = () => this.age == undefined? 0:this.age * 2;
}

let city;
let state="New York";

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
console.log(joe.Age);
