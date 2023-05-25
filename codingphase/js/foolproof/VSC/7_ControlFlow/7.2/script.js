var translate = (grade) => {

    switch(grade) {

        case "A":
            console.log("You have an 'A'! Most excellent.")
            break;
        case "B":
            console.log("You have an 'B'! Not bad.")
            break;
        case "C":
            console.log("You have an 'C'. So-so")
            break;
        case "D":
            console.log("You have an ''D. Bummer.")
            break; 
        default:
            console.log("Sorry! You failed!") 
            break;          
    }
}

var jones = {

    name: "Jones",
    age: 17,
    grade: 'B'
}

var josie = {

    name: "Josie",
    age: 17,
    grade: 'D'
}

var jerome = {

    name: "Jerome",
    age: 17,
    grade: 'F'
}

translate(jones.grade);
translate(josie.grade);
translate(jerome.grade);
