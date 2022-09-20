"use strict";
// function with optional parameter
const add = function (a, b, c) {
    return (c != undefined) ? a + b + c : a + b;
};
// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// function with required (defaulted) parameter
const subtract = (a, b = 10) => a - b;
// console.log(subtract(3, 7));
// console.log(subtract(3));
// using rest parameter
function add2(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b, 0);
}
// let numbers = [3, 4, 5];
// console.log(add2(1, 2, ...numbers));
// console.log(add2(1, 2, 3, 4, 5, 6))
// generics
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5]));
console.log(getItems(['a', 'b', 'c', 'd', 'e']));
