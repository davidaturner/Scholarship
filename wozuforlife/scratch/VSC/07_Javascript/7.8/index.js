var myArray = [3, 5, 9, 11, 18];
for (var i = 0; i < myArray.length; i++){
    if (myArray[i] >= 10) {
        console.log("The value " + myArray[i] + " is double digits!");
    }
    else {
        console.log("The value " + myArray[i] + " is single digits!");
    }
}