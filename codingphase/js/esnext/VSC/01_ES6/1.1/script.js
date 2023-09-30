// console.log("JS");
var name = "Joe";
console.log(name);

let name1 = "Joe";
name1 = "Johnny";
console.log(name1);

const name2 = "Joe";
// name2 = "Johnny"; --causes error.
console.log(name2);

// const is not completely immutable.
const name3 = ["Abraham", "Martin", "John"];
console.log(name3);
name3.push("Joe");
console.log(name3);