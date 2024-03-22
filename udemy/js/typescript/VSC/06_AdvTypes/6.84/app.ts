type Employee = {
    name: string;
    startDate: Date;
}

type Admin = {
    name: string;
    privileges?: string[];
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

// type guards
// 1. typeof
// 2. (property) in
// 3. instanceof
function add(a: Combineable, b: Combineable) {
    // return a + b;    error
    if (typeof a === 'string' || typeof b === 'string' ) {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}

console.log(add(1, 20));
console.log(add("cop", 342));

function printEmployeeInformation(a: AdminEmployee) {
    console.log("Name: " + a.name);
    if ('privileges' in a) {
        console.log("Privileges: " + a.privileges);
    }
    if ('startDate' in a) {
        console.log("Start Date: " + a.startDate);
    }
}
printEmployeeInformation(toby);
printEmployeeInformation({name: "JoeSantos", startDate: new Date()});


abstract class Vehicle {
    abstract drive(): string;
}

class Car extends Vehicle {
    drive(): string {
        return "Driving a car";
    };
    loadPassenger(): string {
        return "I carry 4 passengers comfortably.";
    }
}

class Truck extends Vehicle {
    drive(): string {
        return "Driving a truck";
    }
    loadCargo(): string {
        return "I can carry 500 pounds.";
    }
}

const car = new Car();
const truck = new Truck();
console.log(car.drive());
console.log(truck.drive());

type MyVehicle = Car | Truck;
function load(v:MyVehicle) {
    if (v instanceof Car) {
        return v.loadPassenger();
    } else if (v instanceof Truck) {
        return v.loadCargo();
    } else {
        return "Cannot load!";
    }
}

console.log(load(car));
console.log(load(truck));




