// interface
// adds type checking for objects.
// construct does NOT exist in JS. 
// allows User to write better constructed code.

// interface Greetable {
//     name: string;
//     age?: number; // age optional

//     greet(gp: Greetable) : void;
// }

// type GreetablePerson = {
//     readonly name: string;
//     age: number;

//     greet(gp : GreetablePerson) : void;
// }

interface Greetable {
    readonly name: string;
    greet(n: Greetable) : void;
}
interface AgeCheckable {
    age?: number;
    greetAge(a?: AgeCheckable) : void;
}

interface GreetableAgeCheckable extends Greetable, AgeCheckable {    
}

class Person implements GreetableAgeCheckable {
// class Person implements Greetable, AgeCheckable {
    name: string = "";      // can it be private? with getters and setters?
    age?: number;
    constructor(name: string, age?: number) {
        this.name = name;
        if (age) {
            this.age = age;
        }
    }

    greetPerson() {
        this.greet(this);
    }
    greet(p: Person) {
        if (p.name == '') {
            console.log(`Hi!`);
        } else {
            if (p.age === undefined || p.age == 0) {
                console.log(`Hi! My name is ${p.name}. No age set.`);
            }
            else {
                console.log(`Hi! My name is ${p.name}, ${p.age}.`);
            }
        }
    }

    isAdult = false;
    greetAgePerson() {
        this.greetAge(this);
    }
    greetAge(p: Person) {
        if (p.age !== undefined) {
            p.isAdult = (p.age >= 18)? true : false;
            if (p.isAdult) {
                console.log(`I am an adult.`);
            } else {
                console.log(`I am not an adult. Are you my mummy?`);
            }
        }
    }
}

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

let person: Person = new Person("Joele", 12);
person.greetPerson();
person.greetAgePerson();
// person.greet(person);
// person.checkAge(person);

let person1: Person = new Person("Timmy");
person1.greetPerson();
person1.greetAgePerson();

let person2: Person = new Person("Karm", 26);
person2.greetPerson();
person2.greetAgePerson();
// person.greet(person);
// person.checkAge(person);


