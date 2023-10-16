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
// enum - enumerated list
if (person.role == Role.READ_ONLY) {
    console.log("".concat(person.name, " has Read Access Only."));
}
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 100] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 101] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 102] = "AUTHOR";
})(Role2 || (Role2 = {}));
;
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "ADMIN";
    Role3["READ_ONLY"] = "READ ONLY";
    Role3[Role3["AUTHOR"] = 1000] = "AUTHOR";
})(Role3 || (Role3 = {}));
;
console.log(Role2.READ_ONLY);
console.log(Role3.READ_ONLY);
console.log(Role3.AUTHOR);
// any
var timeOfDay;
timeOfDay = ['Morning', 'Afternoon', 1800];
console.log(timeOfDay[2]);
