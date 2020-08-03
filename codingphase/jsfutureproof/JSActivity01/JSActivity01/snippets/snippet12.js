// Function exercise
// declare a variable to a function that console name.
var fullname = function (name) {
    return name;
};
console.log(fullname('Joe Santos'));

// declare a function that takes two numbers, multiply them and returns a result.
function multiply(a, b) {
    return a * b;
};
console.log(multiply(6, 15));

// declare a function that takes the results of the last function, divide it by two, return result.
function halve(a) {
    return a / 2;
}
function divideByTwo(a, b) {
    return multiply(a, b) / 2;
};
console.log(halve(multiply(6, 15)));
console.log(divideByTwo(6, 15));

