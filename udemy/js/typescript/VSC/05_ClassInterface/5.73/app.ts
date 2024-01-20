// interface
// adds type checking for objects.

interface Greetable {
    // cannot any access modifiers here but can make readonly.
    readonly name: string;
    // name: string;
    age: number;

    greet(phrase: string) : void;
}

interface AgeCheckable {

    checkAge(age: number) : void;
}

class Person implements Greetable, AgeCheckable {
    name: string = "";      // can it be private? with getters and setters?
    age: number = 0;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name + ", " + this.age + ".")
    }

    isAdult = false;
    checkAge(age: number) {
        this.isAdult = (this.age >= 18)? true : false;
    }
}

let person: Person = new Person("Joe", 26);
person.greet("Hi! My name is");
person.checkAge(person.age);
if (person.isAdult) {
    console.log(`I am an adult.`);
} else {
    console.log(`I am not an adult. Are you my mummy?`);
}


