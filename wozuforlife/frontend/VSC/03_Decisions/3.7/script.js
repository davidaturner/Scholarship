const example = helloWorld => console.log(helloWorld); // don'tforget the arrow!
example("Hello, World!");

// example 1
const example1a =  age => {
    let isOldEnough = age >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';
    console.log(isOldEnough);
}
// let age = 17;
const example1b = age => {
    if (age >= 18) {
        console.log('Welcome to our site.');
    } else {
        console.log('Sorry, you must be 18 or older to enter');
    }
}
example1b(17);

// example 2
let isOdd = false;

isOdd ? console.log(1) : console.log(2);

// example 3
let pokemon = 130;

const title = pokemon < 145 ? 'New Trainer' : 'Master';

console.log(title);

// example 4
let age = 6;

const inKindergarten = age < 5 ? ' Too young' : 'Old Enough';



