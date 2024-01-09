var username = "Max";
var result;
// function add(a:number, b:number) {
//     result = a + b;
//     return result;
// }
// console.log(result);
// console.log(add(2, 12));
var age = 29;
if (age > 20) {
    var isOld = true;
    console.log(isOld);
}
// console.log(isOld); out-of-block scope
var add = function (a, b) { return a + b; }; // implicit return
console.log(add(2, 12));
var greeting = function (output) { return console.log("Hi ".concat(output)); };
var greet = function (name) { return console.log(name); };
greeting("Jack");
greet("Florence");
var button = document.querySelector('button');
