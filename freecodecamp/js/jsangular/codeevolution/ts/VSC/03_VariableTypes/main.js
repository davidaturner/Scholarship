"use strict";
exports.__esModule = true;
var title = "Hello, World!";
var isMarried = true;
var age = 29;
var name = "Joe Santos";
// template string - 
// can span multiple lines
// can have expressions
var sentence = "Hi my name is ".concat(name, ".\nI am a beginner at Typescript.");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null; // error; type 'null' is not assignable to type (boolean)
// let myName: string = undefined; // error; 'undefined' is not assigned to type (string)
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list2);
// tuples
var person1 = ["Joe", 29];
// enum
// enum Color {Red, Green, Blue}; // values 0, 1, 2
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; // values 5, 6, 7
var c = Color.Green;
console.log(c);
// any - when you simply don't know what var type beforehand.
var randomValue = 10;
randomValue = true;
randomValue = "Boo Berry";
// 'benefit' for using 'any'
// clearly used to converted code into JS
var myVariable = 10;
// myVariable();                   // no error; no check; fails at runtime.  
// myVariable.uppercase();         // no error; no check; fails at runtime.
console.log(myVariable);
// sample function to test type assertion
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
console.log(myVariable.name); // no error; no check; see check below - hasName
if (hasName(myVariable)) {
    myVariable.name = "Hester";
    console.log("Hester");
}
else {
    console.log("name not found");
}
// unknown
var story = 10;
// console.log(story.name); // error; 'story' is of type 'unknown'
// story();                   // error; 'story' is of type 'unknown'  
// story.uppercase();         // error; 'story' is of type 'unknown'
// (story as String).toUpperCase(); // no error; 'unknown' is type asserted; fails at runtime
console.log(story);
// union type
// useful for handling data not under your control.
// such as retrieving or sending data to API.
// unlike 'any', 'union' type once assigned has that type's functions available.
var mt;
mt = false;
mt = 20;
console.log(mt.toString());
