// forEach and map
var people = ["Marcy", "Kent", "Joseph", "Quinn"];
//console.log(people);
/*
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};
*/
people.forEach(function (person) {
    console.log(person);
});
console.log("=========================");
var users = [
    { name: 'Joe', age: 21 },
    { name: 'Frog', age: 33 },
    { name: 'Kamala', age: 57 }
];
users.forEach(function (user) {
    console.log(user.name);
});
users.map(function (user) {
    console.log(user.age);
});
var arr = [1, 2, 3, 4, 5];
console.log("original = " + arr);
// difference between map and foreach
// other than foreach is slower.
var double1 = arr.forEach(function (num) {
    return num * 2; // values are not returned
});
console.log("foreach double1 = " + double1);
arr.forEach(function (num, index) {
    return arr[index] = num * 2;
});
console.log("forEach arr = " + arr);
arr = [1, 2, 3, 4, 5];
var double2 = arr.map(function (num) {
    return num * 2; // values are returned
});
console.log("map double2 = " + double2);
arr = arr.map(function (num) {
    return num * 2;
});
console.log("map arr = " + arr);
//# sourceMappingURL=snippet08.js.map