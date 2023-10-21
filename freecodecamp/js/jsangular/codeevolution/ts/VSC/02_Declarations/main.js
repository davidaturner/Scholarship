"use strict";
exports.__esModule = true;
// typescript brings in the concepts of 'let' and 'const'
// both do not allow a variable to be redefined much like a var does in js.
// 'let' and "const" differ in that:
// 1. 'let' declaration a variable without initialization; a 'const' must
//      must initialize.
// 2. 'let' variable can be re-assigned to a value of the same 
//     as the initial definition but different value. a 'const' wont allow 
//     changing a value.
var bygones = "bygones";
// let bygones = "arebygones"; // error; can't re-declare block-scoped variable
var helloworld;
helloworld = "Hello, World!";
// const isMarried; // error; must have an initial value.
var isMarried = true;
// isMarried = false; // error; a const cannot update its value.
console.log(bygones);
console.log(helloworld);
console.log(isMarried);
