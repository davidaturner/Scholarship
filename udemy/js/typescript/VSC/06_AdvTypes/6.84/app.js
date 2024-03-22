"use strict";
const toby = {
    name: "Toby",
    startDate: new Date(),
    privileges: ["server-start", "server-stop"]
};
console.log(toby);
const my606 = 606;
const myLie = false;
const joeSantos = "Joe Santos";
const my404 = 404;
// type guards
// 1. typeof
// 2. (property) in
// 3. instanceof
function add(a, b) {
    // return a + b;    error
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
console.log(add(1, 20));
console.log(add("cop", 342));
function printEmployeeInformation(a) {
    console.log("Name: " + a.name);
    if ('privileges' in a) {
        console.log("Privileges: " + a.privileges);
    }
    if ('startDate' in a) {
        console.log("Start Date: " + a.startDate);
    }
}
printEmployeeInformation(toby);
printEmployeeInformation({ name: "JoeSantos", startDate: new Date() });
class Vehicle {
}
class Car extends Vehicle {
    drive() {
        return "Driving a car";
    }
    ;
    loadPassenger() {
        return "I carry 4 passengers comfortably.";
    }
}
class Truck extends Vehicle {
    drive() {
        return "Driving a truck";
    }
    loadCargo() {
        return "I can carry 500 pounds.";
    }
}
const car = new Car();
const truck = new Truck();
console.log(car.drive());
console.log(truck.drive());
function load(v) {
    if (v instanceof Car) {
        return v.loadPassenger();
    }
    else if (v instanceof Truck) {
        return v.loadCargo();
    }
    else {
        return "Cannot load!";
    }
}
console.log(load(car));
console.log(load(truck));
