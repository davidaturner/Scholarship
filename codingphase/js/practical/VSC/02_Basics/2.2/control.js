// control flow

// expression - returns a value.
// statement.
var age = 53;
if (age >= 21) {
    console.log("You can drink here!");
} else {
    console.log("Come back when you are old enough.");
}


// functions - reusable code blocks
var isJoeSantos = (name) => {
    return name === "Joe Santos";
}
console.log(isJoeSantos("Frank Stupe"));
console.log(isJoeSantos("Joe Santos"));

// loops - repeatable code blocks
for(var i=0; i<10; i++) {
    console.log(`For: ${i}`);
}
var j = 1;
while (j <= 10) {
    console.log(`While: ${j}`);
    j++;
}