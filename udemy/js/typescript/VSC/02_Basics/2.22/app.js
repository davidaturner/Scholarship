console.log('Hello, World!');
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Role2;
(function (Role2) {
    Role2["ADMIN"] = "ADMIN";
    Role2["READ_ONLY"] = "READ ONLY";
    Role2["AUTHOR"] = "AUTHOR";
})(Role2 || (Role2 = {}));
;
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
    employee: [1, 'Joe Santos'],
    role: Role.READ_ONLY
};
// union types
// function combine(a: number, b: number) {
//   return a + b;
// }
function combine(a, b) {
    var result;
    if (typeof a == 'number' && typeof b == 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + " " + b.toString();
    }
    return result;
}
var example1 = combine(2, 3);
console.log(example1);
var example2 = combine("Hello", "World!");
console.log(example2);
var example = combine(Role2.AUTHOR, "J.R.R. Tolkein");
console.log(example);
