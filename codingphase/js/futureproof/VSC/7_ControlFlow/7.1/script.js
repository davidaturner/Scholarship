var jones = {

    name: "Jones",
    age: 30
}

var josie = {

    name: "Josie",
    age: 16
}

var johnny = {

    name: "Johnny",
    age: 17
}

function checkAge(user) {
    var age = user.age;
    if (age >= 18) {
        console.log("You can buy.");
    } else if (age == 17) {
        console.log("Next year buddy!");
    } else {
        console.log("Sorry! You are too young.")
    }
}

checkAge(jones);
checkAge(josie);
checkAge(johnny);

function welcome(user) {
    var name = user.name;
    if (name == "Jones") {
        console.log("Welcome!");
    } else if (name == "Peter") {
        console.log("Welcome, Peter.");
    } else {
        console.log("You don't work here.");
    }
}

welcome(jones);
welcome(josie);
welcome(johnny);
