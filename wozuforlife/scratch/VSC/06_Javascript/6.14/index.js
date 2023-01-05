var puppy = true;

if (puppy){
  console.log("That puppy is so cute!");
}

// The table below contains other comparison operators that you will encounter 
// and use as a software developer.

// Comparison Operator	Description
// =	Used to set data
// ==	Converts the operands to the same type before making the comparison
// ===	Used to compare data and check to see if it is true, and is only true 
// if the operands are of the same type and the contents match
// !==	Used to compare data and check to see if it is NOT true
// >	Used to check if the data is greater than
// >=	Used to check if the data is greater than or equal to
// <	Used to check if the data is less than
// <=	Used to check if the data is less than or equal to

// 6.14 comparison
5 == "5"; //This will return True.
5 === "5"; //This will return False.

var age = 26;

if (age <= 30){
  console.log ("You aren't THAT old!");
}

// 6.15 if else
var puppyName = "Nermal";

if (puppyName === "Spot"){
  console.log("Hi Spot! You are so cute!");
}
else {
  console.log("That's not Spot. Is that a cat??");
}

// 6.16 else if
var puppyName = "Lassie";

if (puppyName === "Spot"){
  console.log("Hi Spot! You are so cute!");
}
else if (puppyName === "Lassie"){
  console.log("That's not Spot, that's Lassie!!");
}
else {
  console.log("That's not Spot. Is that a cat??");
}

// 6.17 multiple ifs
var puppy = "Spot";
var cat = "Mittens";

if (puppy === "Spot"){
  console.log("Hi Spot! You are so cute!");
}
if (cat === "Mittens"){
  console.log("Meow to you, Mittens!");
}
