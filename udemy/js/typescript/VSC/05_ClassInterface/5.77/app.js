// type GreetablePerson = {
//     readonly name: string;
//     age: number;
// type checkAgeFn = (a: number, l:number) => boolean;
var ageAboveLimit;
var ageBelowLimit;
ageAboveLimit = function (a, l) {
    return a >= l;
};
ageBelowLimit = function (a, l) {
    return (a > 0) && (a < l);
};
console.log(ageAboveLimit(28, 18));
console.log(ageBelowLimit(16, 18));
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
// let person: Person = new Person("Joel", 12);
// person.greet(person);
// person.checkAge(person);
// // person.greet(person);
// // person.checkAge(person);
// let person1: Person = new Person("Joele", 26);
// person1.greet(person1);
// person1.checkAge(person1);
// let person2: Person = new Person("Timmy", -1);
// person2.greet(person2);
// person2.checkAge(person2);
