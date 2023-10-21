// import {  User, SalariedUser, Login, Address } from "./interfaces";
import * as b from "./interfaces";

class Employee {

    #id: number;

    protected name: string;

    // address: string;
    address: b.Address;

    constructor(id: number, name: string, address: b.Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getEmployeeId() {
        return this.#id;
    }

    setId( id:number ) {
        this.#id = id;
    }

    static getEmployeeRole(): string {
        return "Employee";
    } 

}

let tami: Employee = new Employee(1, 
            "tami", 
            {
                street: "1313 Mockingbird Ln",
                city: "Pittsburgh",
                zip: "15223-4433",
                email: "tamiflu@gmail.com"
            });

let joe: b.User = {
  name: "John",
  age: 26,
  id: 1,
  email: "johnsmith@email.com"
}

// object deconstructing.
let {name: username, age, id, email } : b.User = joe;
console.log(username);
console.log(age);
console.log(id);
console.log(email);

let crabb: b.SalariedUser = {
    name: "Crabb",
    age: 39,
    id: 10,
    email: "crabbbob@email.com",
    salary: 20000
}

// spread
let [userj, userc, ...restOfTheUsers]: b.User[] = [
    joe, 
    crabb, 
    {name: "smiley", age: 32, id:100, email: "smileytodd@gmail.com"},
    {name: "pawpau", age: 31, id:101, email: "pawpauolink@gmail.com"}
];

console.log(userj);
console.log(userc);
console.log(restOfTheUsers);

// filter
let result = restOfTheUsers.filter((user) => user.id > 100);