// what you should know

// variables
var username = "Joe Boi";
console.log(username);
username = "Joe Santos";
console.log(username);

// constants
const macys = "Macy's";
console.log(username);

// operators - see ops.js

// types
// string
console.log("Username: " + "codingphase");
console.log(`I shop at ${macys}.`);

// numbers
var numberOfTimes = 2;
console.log(`I had shopped at ${macys} ${numberOfTimes} times so far.`);

// array
var listArray = [23, 234, "billy", "joe", {name: "Joe Santos", age: 29}];
console.log(listArray[3]);
console.log(listArray[4].name);

// objects
var joesantos = {
    name: "Joe Santos",
    age: 29,
    greeting: function() {
        return "Hi, " + this.name + ", " + this.age;
    }
}
console.log(joesantos.age);
console.log(joesantos.greeting());
// joesantos[isMarried] = true; gives an undefined : true. do not use.
joesantos.isMarried = true;
console.log(joesantos);

// boolean
var isMarried = false;
console.log("Are you married? " + (isMarried)?"Yep!":"Nope!");

// null, NaN, undefined
var tommie = null;
console.log(tommie);
console.log(NaN);
console.log(undefined);


