type Employee = {
    name: string;
    startDate: Date;
}

type Admin = {
    name: string;
    privileges: string[];
}

// complex type - intersection.
type AdminEmployee = Employee & Admin;

const toby : AdminEmployee = {
    name: "Toby",
    startDate: new Date(),
    privileges: ["server-start", "server-stop"]
}

console.log(toby);

// complex type - union
type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

const my606: Numeric = 606;
const myLie: Numeric = false;

const joeSantos: Combineable = "Joe Santos";
const my404: Universal = 404;

console.log(my606);
console.log(myLie);
console.log(joeSantos);
console.log(my404/2);






