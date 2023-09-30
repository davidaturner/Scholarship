export class User {
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

    set Age(value:number) {
        this.age = value;
    }

    welcome = () => console.log(this.hello(this.username));
    fullwelcome = () => console.log(
                            this.helloage(this.username, this.age) + " " + 
                            this.from(this.city, this.state) );

    protected sayhello = () => this.hello(this.username);

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