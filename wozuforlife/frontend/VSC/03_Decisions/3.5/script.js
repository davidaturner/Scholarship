// activity

// Finish the switch statement with two cases that check if phoneNumberPresent 
// is true or false.

// If true - assign false to the needsNumber variable.
// if false - assign true to the needsNumber variable.
// default - assign "Try Again" to the needsNumber variable.
// Don't forget your break keyword.
let phoneNumberPresent = true;
let needsNumber;
switch(phoneNumberPresent) {
    case true:
        needsNumber = false;
        break;
    case false:
        needsNumber = true;
        break;
    default:
        needsNumber = "Try Again";
        break;
}
console.log(needsNumber);

// Write a switch statement that checks selectedNumber:

// If selectedNumber is 23, then set output to 
// "That's exactly what I was thinking, spoooky!"

// If selectedNumber is 9, set output to "How did you know?"

// In any other case, set output to "Better luck next time.".

// Don't forget the break statement!

// Be sure to test to make sure you entered the values for the output variable 
// properly. It would likely reduce a chance of error if you copy and paste the
// values in the quotes (including the punctuation).
let selectedNumber = 23;
let output;
switch(selectedNumber) {
  case 23:
    output = "That's exactly what I was thinking, spoooky!";
    break;
  case 9:
    output = "How did you know?";
    break;
  default:
    output = "Better luck next time.";
    break;
}
console.log(output);