// filter, find, every, some
var users = [
    { name: 'Joe', age: 39 },
    { name: 'Danner', age: 53 },
    { name: "Bonn", age: 18 }
];
//console.log(users);
//var filtered = users.filter((user) => {
//    return user.age > 18;
//})
//console.log(filtered);
//var filterf = (user) => user.age > 40;
//console.log(users.filter(filterf));
//var filtered = users.filter((user) => {
//    return (user.name.toLowerCase().charAt(0) == 'b');
//});
//console.log(filtered[0].name);
// Javascript has a find; Typescript DOES NOT.
//var myNameIs = users.find((user) => {
//    return (user.name == 'Bonn');
//});
//console.log(`My Name is ${myNameIs}`);
var boolMeetingAge = users.every(function (user) { return user.age > 7; });
console.log(boolMeetingAge);
var meetingAgef = function (user) { return user.age > 50; };
boolMeetingAge = users.every(meetingAgef);
console.log(boolMeetingAge);
boolMeetingAge = users.some(meetingAgef);
console.log(boolMeetingAge);
//# sourceMappingURL=main.js.map