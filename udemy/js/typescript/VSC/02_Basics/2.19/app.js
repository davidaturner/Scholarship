console.log('Hello, World!');
// const person = {
//   name: 'Joe Santos',
//   age: 30,
//   hobbies: ['Skiing', 'Chess'],
//   employee: [1, 'Joe Santos']
// }
var person = {
    name: 'Joe Santos',
    age: 30,
    hobbies: ['Skiing', 'Chess'],
    employee: [1, 'Joe Santos']
};
// tuple - fixed length, fixed type
// often a union type.
var myEmployee = person.employee;
console.log(myEmployee);
myEmployee.push("Tom Turnkey");
console.log(myEmployee);
myEmployee[1] = "Clobberin Tyme";
console.log(myEmployee);
myEmployee = [];
myEmployee.push(2, "Missy E");
console.log(myEmployee);
myEmployee.push(person.employee[0], person.employee[1]);
console.log(myEmployee);
