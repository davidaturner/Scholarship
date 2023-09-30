var users = ["Matt", "Cam", "Barbara", "Bryant", "Joseph"];
console.log(users);

console.log(users[2]); // zero based.
console.log(users[4]);
console.log(users[users.length-1]);

var stuff = ["Matt", 2, {user: "Barbara"}, ["array1", "array2"], "Joseph"];

console.log(stuff[2]);
console.log(stuff[2].user);