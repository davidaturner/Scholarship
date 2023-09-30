console.log("JS");
// Object oriented programming refers to a type of programming
// (software design) in which programmers define not only the 
// data type of a data structure, but also the types of 
// operations (functions) that can be applied to the data structure. 

console.log("Everything is an object");
console.log("user1".toLowerCase());
console.log("user1".length);
// default proto.
// console.log("user1".__proto__);

// overriding proto.
var person = {
    print: function() {
        console.log(this.name);
    }
}
console.log(person);
var joe = {
    name: 'Joe Santos'
}
joe.__proto__ = person;
joe.print();

// more type proto
var students = ["joe", "sam", "laina"];
console.log(students);
console.log(students.length);
// __proto__ is a prototype, no data.
console.log(students.__proto__.length);