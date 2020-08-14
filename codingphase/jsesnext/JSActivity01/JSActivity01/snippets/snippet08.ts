// forEach and map
var people = ["Marcy", "Kent", "Joseph", "Quinn"];
//console.log(people);
/*
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};
*/
people.forEach((person) => {
    console.log(person);
});

console.log("=========================");

var users = [
    { name: 'Joe', age: 21 },
    { name: 'Frog', age: 33 },
    { name: 'Kamala', age: 57 }];

users.forEach((user) => {
    console.log(user.name);
});
users.map((user) => {
    console.log(user.age);
});


let arr = [1, 2, 3, 4, 5];
console.log("original = " + arr);

// difference between map and foreach
// other than foreach is slower.
let double1 = arr.forEach((num) => {
    return num * 2; // values are not returned
})
console.log("foreach double1 = " + double1);
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
console.log("forEach arr = " + arr);
arr = [1, 2, 3, 4, 5];
let double2 = arr.map((num) => {
    return num * 2; // values are returned
});
console.log("map double2 = " + double2);
arr = arr.map((num) => {
    return num * 2;
});
console.log("map arr = " + arr);



