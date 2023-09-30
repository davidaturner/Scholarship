// deconstructing object
const username = {
    name: "Joe Santos",
    age: 29
}

// var myusername = username.name;
// var myuserage = username.age;

// console.log(`${myusername}, ${myuserage}`);
var {name, age} = username;
console.log(`${name}, ${age}`)