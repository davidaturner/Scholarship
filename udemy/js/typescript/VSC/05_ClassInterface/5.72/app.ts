// interface
// adds type checking for objects.
interface Person {

    name: string;
    age: number;

    greet(phrase: string) : void;
}

let person1: Person;
person1 = {
    name: 'Max',
    age: 19,
    greet(phase: string) {
        console.log(phase + " " + this.name + "!");
    }
}

person1.greet("Hi! My name is");