// declare a variable with a function that prints your name.
var username = (name) => { console.log(name) };

// declare a function that takes two arguments then multiplies them and 
// return the answer.
function multiply(a, b) {
    return a * b;
}

// declare a function that takes the result of the last function, divides it
// by 2 and return the answer.

var divideByTwo = (a) => { return a / 2 };

username("Jose Frost");
var multiplied = multiply(2,4);
console.log(multiplied);
console.log(divideByTwo(multiplied));
