export {};

function printv1(name) {
  console.log(name);
}
printv1("Joe");

let printv2 = (name) => {
  console.log(name);
}
printv2("Mark");

let printv3 = (name, age, location) => console.log(name);
printv3("Perri", 32, "London");

let printv4 = name => console.log(name);
printv4("Carl");

let double = number => number * 2;
console.log(double(8));

let printv5 = function (name) { console.log(name)};
let doublev2 = function (number) { return number * 2};

printv5("Michael");
console.log(doublev2(16));