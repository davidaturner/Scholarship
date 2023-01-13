// Global scope
var myAge = 26;

function ageInTwentyYears() {
    // Local scope
        var myAge = 26;
        
  return myAge + 20; //returns 46
}

function ageTenYearsAgo() {
    // Local scope
  return myAge - 10; // returns 16
}

console.log(myAge);
console.log(ageInTwentyYears());
console.log(ageTenYearsAgo());
console.log(myAge);