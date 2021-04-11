// alert('Hello from JS')

// If Else/Switch
var james = {
    name: "James",
    sex: "M",
    age: 35
}

var melon = {
    name: "Melon",
    sex: "F",
    age: 12
}

var tamiflu = {
    name: "Tamiflu",
    sex: "F",
    age: 18
}

function checkage(person) {
    if (person["age"]>18) {
        return person["name"].toLowerCase() +  
            ", you meet the age requirement. have a good night!"
    } else if (person["age"] == 18) {
        return person["name"].toLowerCase() +  
            ", you meet the age requirement. congrats and enjoy!"
    }
    else {
        return person["name"].toLowerCase() +
            ", you do not meet the age requirement. scram kid!"
    }
}

console.log(checkage(james))
console.log(checkage(melon))
console.log(checkage(tamiflu))

function checkpersonnel(person) {

    var personnelvetted;
    var lname = person.name.toLowerCase()
    switch (lname) {
        case 'tamiflu':
            personnelvetted = "hi " + lname + ". get to work!!"
            break
        case 'melon':
            personnelvetted = "hi " + lname + ". happy birthday.. now get to work!"
            break;
        default:
            personnelvetted = "who the hell are you? get thee hence!"
            break;
    }
    return personnelvetted
}

console.log(checkpersonnel(tamiflu))
console.log(checkpersonnel(melon))
console.log(checkpersonnel(james))


