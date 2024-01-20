// interface
// adds type checking for objects.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = ""; // can it be private? with getters and setters?
        this.age = 0;
        this.isAdult = false;
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name + ", " + this.age + ".");
    };
    Person.prototype.checkAge = function (age) {
        this.isAdult = (this.age >= 18) ? true : false;
    };
    return Person;
}());
var person = new Person("Joe", 26);
person.greet("Hi! My name is");
person.checkAge(person.age);
if (person.isAdult) {
    console.log("I am an adult.");
}
else {
    console.log("I am not an adult. Are you my mummy?");
}
