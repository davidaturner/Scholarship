class EmployeeF {

    id!: number;    // ! forces variable to exist w/o constructor.
    name!: string;
    age!: number;
}

// let joe = new EmployeeF();  // no constructor. default is assumed.
// joe.id = 1;
// joe.name = "Joe Santos";
// joe.age = 29;
// console.log(joe)

class EmployeeG {
    id : number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // constructor(id: number) {    // Multiple constructors not allowed.
    //     this.id = id;
    // }

    describe() : string {
        return `${this.name}, ${this.age}`; // Remember, it's Javascript!
    }
    // describe() : string {
    //     return this.name + ", " + this.age;
    // }
}

let james = new EmployeeG(2, "James Gunn", 44);
// let james = new EmployeeG(); // Default constructor can no longer be used.
console.log(james);
console.log(james.describe());

class EmployeeH {
    id : number;
    name: string;
    age: number;

    constructor(id: number, name: string, age?: number) {
        this.id = id;
        this.name = name;
        this.age = 0;               // set default
        if (age != undefined) {
            this.age = age;
        }
    }
}


// let mark = new EmployeeH(3, "Mark Hamill");
// let freddie = new EmployeeH(4, "Fred Flintstone", 1000000);
// console.log(mark);
// console.log(freddie);