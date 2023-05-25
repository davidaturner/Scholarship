//activity

// Write an arrow function named doubleAge that has a single parameter age and 
// returns the product of age and 2.

// HINT: The product of two numbers a and b is a * b.

const doubleAge = age => age * 2;
console.log(doubleAge(23));

// Write an arrow function named defaultParam that has two parameters:

// parameter a
// parameter b that has a default value of 10.
// The function should return the product of a and b.
const defaultParam = (a, b=10) => a * b;
console.log(defaultParam(2));
console.log(defaultParam(2, 3));

// Write an arrow function named addName that takes two parameters named 
// firstName and lastName, then concatenates them with a space in between.
const addName = (firstName, lastName) => firstName + " " + lastName;
console.log(addName("John", "Smith"));
console.log(addName("Ruiz", "Goethe"));