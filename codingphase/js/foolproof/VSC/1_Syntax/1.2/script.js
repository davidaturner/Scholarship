// numbers
console.log(2);

console.log(2 * 8);

console.log((2 + 4) * 5);

var total = ((2 +  4)* 5 )/2;
console.log(total);

// string
var myName = 'Joe Santos';
console.log(myName);

console.log("Poppy Fresh's Bunny");

// boolean
var studentPassed = true
console.log(studentPassed);

studentPassed = false;

var check = (4 * 5) == 20;
console.log(check);

if (studentPassed == true) {
    console.log("Student passed!")
} else {
    console.log("Sorry. Student take the class again.")
}

// array
var userData = ['Joe', 234, 46, 67, "Danny"];
console.log(userData);
console.log(userData[3]);

// objects
var person = {
    name : "Joe Santos",
    age : 29,
    hasKids : true,
    degrees: ["BA", "AS"],
    printName : function() {
        console.log("My name is Joe!");
    }
}
console.log(person);

console.log(person.name);
console.log(person.hasKids);
console.log(person.degrees);
console.log(person.printName());

// undefined
var bestTeam;
// console.log(bestTeam);

// null
var myStudent = null;
console.log(myStudent);

