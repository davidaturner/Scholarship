function numberChecking(number1, number2) {

    // Write if statements that check for the following:
    // If number1 is greater than 100, console.log the string "Number 1 has many digits!"
    // If number1 is less than 0, console.log the string "Number 1 is a negative number"
    // If number2 is less than 20, console.log the string "Number 2 is not a very high number"
    // If number2 is greater than 50, console.log the string "Number 2 is a high number"
    // Hint! You will use 4 if statements. You will not need if else statements as you 
    // are checking for 4 different cases of the parameters.
    if (number1 > 100) {
        console.log("Number 1 has many digits!")
    }
    if (number1 < 0) {
        console.log("Number 1 is a negative number")
    }
    if (number2 < 20) {
        console.log("Number 2 is not a very high number")
    }
    if (number2 > 50) {
        console.log("Number 2 is a high number")
    }
}

numberChecking(101, 1)