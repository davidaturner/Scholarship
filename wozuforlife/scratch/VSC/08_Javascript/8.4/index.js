function calculateNumbers(){
    var number1 = 10;
    var number2 = 3;
    var number3 = number1 + number2;

    if (number3 >= 10){
        console.log("Big number");
    }
    else {
        console.log("Small number");
    }
}

calculateNumbers();

function loopingThroughArray1(admired){
    for (var i = 0; i < admired.length; i++){
        console.log("I admire " + admired[i]);
    }
    console.log("Done looping the admired!")
}
var names = ["Jacob", "Hunter", "John", "Paul"];
loopingThroughArray1(names);

function loopingThroughArray2(){
    var nameArray = ["Jacob", "Hunter", "John", "Paul"];

    for (var i = 0; i < nameArray.length; i++){
        if (nameArray[i] === "Jacob"){
            console.log("Jacob is my brother!");
        }
        else if (nameArray[i] === "Hunter"){
            console.log("Hunter is a friend.");
        }
        else if (nameArray[i] === "John"){
            console.log("John is a coworker.");
        }
        else if (nameArray[i] === "Paul"){
            console.log("I've never met Paul.");
        }
    }
    return "Done looping the nameArray!";
}
var result = loopingThroughArray2();
console.log(result);