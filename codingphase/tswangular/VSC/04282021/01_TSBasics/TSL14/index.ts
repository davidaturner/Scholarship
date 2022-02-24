export {};

function printv1(name:string) {
  console.log(name);
}
printv1("Joe");

let printv2 = (name:string) => {
  console.log(name);
}
printv2("Mark");

let printv3 = (name:string, age:number, location:string) => console.log(name);
printv3("Perri", 32, "London");

let printv4 = name => console.log(name);
printv4("Carl");

let double = number => number * 2;
console.log(double(8));

let printv5 = function (name:string) { console.log(name)};
let doublev2 = function (number:number) { return number * 2};

printv5("Michael");
console.log(doublev2(16));