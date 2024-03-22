// type GreetablePerson = {
//     readonly name: string;
//     age: number;

//     greet(gp : GreetablePerson) : void;
// }

// custom function type.
interface checkAgeFn {
    (a: number, l:number) : boolean;
}   
// type checkAgeFn = (a: number, l:number) => boolean;

let ageAboveLimit : checkAgeFn;
let ageBelowLimit : checkAgeFn;

ageAboveLimit = (a: number, l:number) => {
    return a >= l;
}
ageBelowLimit = (a: number, l: number) => {
    return (a > 0) && (a < l);
}

console.log(ageAboveLimit(28, 18));
console.log(ageBelowLimit(16, 18));

interface Named {
    readonly name: string;
}
interface Greetable extends Named {
    greet(n: Greetable) : void;
}
interface AgeCheckable {
    age: number;
    checkAge(a: AgeCheckable) : void;
}

// interface GreetableAgeCheckable extends Greetable, AgeCheckable {    
// }

// class Person implements GreetableAgeCheckable {
class Person implements Greetable, AgeCheckable {
    name: string = "";      // can it be private? with getters and setters?
    age: number = 0;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(p: Person) {
        if (p.name == '') {
            console.log(`Hi!`);
        } else {
            if (p.age <= 0) {
                console.log(`Hi! My name is ${p.name}. No age set.`);
            }
            else {
                console.log(`Hi! My name is ${p.name}, ${p.age}.`);
            }
        }
    }

    private isAdult = false;
    checkAge(p: Person) {
        if (p.age > 0) {
            this.isAdult = (p.age >= 18)? true : false;
            if (this.isAdult) {
                console.log(`I am an adult.`);
            } else {
                console.log(`I am not an adult. Are you my mummy?`);
            }
        }
    }
}

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



