var fruits = ["Apple", "Banana", "Grape"];
console.log(fruits);
// if (fruits.length == 3) {
    fruits.push("Strawberry");
    console.log(fruits);
// }
var fruit = fruits.pop();
console.log(fruit);
console.log(fruits);

fruits.splice(1,2); // index, number of elements
console.log(fruits);

console.log(fruits.length);
