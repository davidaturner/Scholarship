alert('Hello, World!')
// variables, data types and data structures.
// old.
var description = "we need a new floor";
var squareMeters = 100;
// modern.
// problem with var.
var test = 5;
var test = 10;
// let or const solves these errors.
let test2 = 5;
// let test2 = 10; // error cannot redeclare block-scoped variable.
// still, whenever possible, use const.
const needCoding = true;
const floorOptions = ["carpet", "hardwood", "tiles"];
const renovationJob = {
    owner: 'John', // property
    maximumPrice: 5000
}
// advantage using object. passing data to file or database.
const errorCode = {
    statusCode: 404,
    description: "Not found",
    retry: false
}
console.log(floorOptions[2]);
console.log(errorCode);
console.log(errorCode.description)

// traditional functions vs arrow functions.