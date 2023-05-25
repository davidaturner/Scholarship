const thisNumber = 1234;

// thisNumber = 1200; // This will not work

const settings = {
  number: 12,
  time: 'noon'
};

settings.number = 11;
settings.time = 'eleven';
console.log(settings)

// let works the same way as const except that it allows for the 
// reassignment of variables, as shown below:
let i = 2;

i = 3; // This works because you are reassigning the variable

// let i = 3; // This will not work

// When using ES6, you should primarily use the const keyword to declare 
// variables and let in special cases where reassignment may be necessary. 
// If you are unsure, start with const, and if you need to reassign the variable 
// directly, then you can change const to let.