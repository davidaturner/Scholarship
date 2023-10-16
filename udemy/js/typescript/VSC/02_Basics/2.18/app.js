console.log('Hello, World!');
var person = {
    name: 'Joe Santos',
    age: 30,
    hobbies: ['Skiing', 'Chess']
};
console.log(person.hobbies);
var sports = ["Skiing", "Chess"];
var mixed = ["Hello", 1, 2.34, true];
// for of
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
