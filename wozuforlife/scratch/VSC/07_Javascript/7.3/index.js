var color1 = "yellow";
var color2 = "blue";
var color3 = "red";

var colors = ["yellow", "blue", "red"];
console.log(colors);
// length
console.log(colors.length);
// sort
var colorsSorted = colors.sort();
console.log(colorsSorted);


var numbers = [7, 1, 2, 3, 5];
console.log(numbers.length);
console.log(numbers.sort()); 
// pop - last element.
var popped = numbers.pop();
console.log(popped);
console.log(numbers);

var myArray = [5, "Hello", true, [1, "Bye", false]];
console.log(myArray);
console.log(myArray[3].length);
myArray.push([1, 2, 3]);
console.log(myArray);

var emptyArray = [];
var oneItemArray = ["One"];