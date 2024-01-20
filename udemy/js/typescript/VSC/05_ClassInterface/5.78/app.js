// interface
// adds type checking for objects.
// construct does NOT exist in JS. 
// allows User to write better constructed code.
var Person = /** @class */ (function () {
    function Person(name, age) {
        // class Person implements Greetable, AgeCheckable {
        this.name = ""; // can it be private? with getters and setters?
        this.isAdult = false;
        this.name = name;
        if (age) {
            this.age = age;
        }
    }
    Person.prototype.greetPerson = function () {
        this.greet(this);
    };
    Person.prototype.greet = function (p) {
        if (p.name == '') {
            console.log("Hi!");
        }
        else {
            if (p.age === undefined || p.age == 0) {
                console.log("Hi! My name is ".concat(p.name, ". No age set."));
            }
            else {
                console.log("Hi! My name is ".concat(p.name, ", ").concat(p.age, "."));
            }
        }
    };
    Person.prototype.greetAgePerson = function () {
        this.greetAge(this);
    };
    Person.prototype.greetAge = function (p) {
        if (p.age !== undefined) {
            p.isAdult = (p.age >= 18) ? true : false;
            if (p.isAdult) {
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
var person = new Person("Joele", 12);
person.greetPerson();
person.greetAgePerson();
// person.greet(person);
// person.checkAge(person);
var person1 = new Person("Timmy");
person1.greetPerson();
person1.greetAgePerson();
var person2 = new Person("Karm", 26);
person2.greetPerson();
person2.greetAgePerson();
// person.greet(person);
// person.checkAge(person);
