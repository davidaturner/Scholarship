// interface
// adds type checking for objects.
// construct does NOT exist in JS. 
// allows User to write better constructed code.
// interface GreetableAgeCheckable extends Greetable, AgeCheckable {    
// }
// class Person implements GreetableAgeCheckable {
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = ""; // can it be private? with getters and setters?
        this.age = 0;
        this.isAdult = false;
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (p) {
        if (p.name == '') {
            console.log("Hi!");
        }
        else {
            if (p.age <= 0) {
                console.log("Hi! My name is ".concat(p.name, ". No age set."));
            }
            else {
                console.log("Hi! My name is ".concat(p.name, ", ").concat(p.age, "."));
            }
        }
    };
    Person.prototype.checkAge = function (p) {
        if (p.age > 0) {
            this.isAdult = (p.age >= 18) ? true : false;
            if (this.isAdult) {
                console.log("I am an adult.");
            }
            else {
                console.log("I am not an adult. Are you my mummy?");
            }
        }
    };
    return Person;
}());
// let person: GreetablePerson = {
//     name: 'Joe',
//     age: 29,
//     greet(gp: GreetablePerson) {
//         if (gp.name == '') {
//             console.log(`Hi!`);
//         } else {
//             if (gp.age == 0) {
//                 console.log(`Hi! My name is ${gp.name}.`);
//             }
//             else {
//                 console.log(`Hi! My name is ${gp.name}, ${gp.age}.`);
//             }
//         }
//     }
// }
// console.log(person.name);
// console.log(person.age);
// person.greet(person);
var person = new Person("Joel", 12);
person.greet(person);
person.checkAge(person);
// person.greet(person);
// person.checkAge(person);
var person1 = new Person("Joele", 26);
person1.greet(person1);
person1.checkAge(person1);
var person2 = new Person("Timmy", -1);
person2.greet(person2);
person2.checkAge(person2);
