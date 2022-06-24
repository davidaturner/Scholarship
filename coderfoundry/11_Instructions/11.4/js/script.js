let persons = [];

const bobbydavis = {
    height: 250,
    firstname: 'Bobby',
    lastname: 'Davis',
    age: 25,
    eyecolor: 'green',
    haircolor: 'mostly gray',
    gender: 'male'
}

// function showPerson() {
//     document.getElementById("demo").innerHTML =
//         `This guy who stole my Bike is ${bobbydavis.firstname} ${bobbydavis.lastname}`
// }

// function showPersons() {

//     if (persons.length == 0) {
//         return;
//     }

//     for(let i=0; i < persons.length; i++) {
//         let current = persons[i];
//         document.getElementById("demo").innerHTML +=
//             `This guy who stole my Bike is ${current.firstname} ${current.lastname}.<br>`
//     }
// }

// show persons
document.getElementById("showpeople").addEventListener("click", 
    function() {

        // showPersons();
        if (persons.length == 0) {
            return;
        }

        for(let i=0; i < persons.length; i++) {
            let current = persons[i];
            document.getElementById("demo").innerHTML +=
                `This guy who stole my Bike is ${current.firstname} ${current.lastname}.<br>`
        }
    }
);

function addPerson() {
    let newfirstname = document.getElementById("fname").value
    let newlastname = document.getElementById("lname").value

    let newperson = {
        firstname: newfirstname,
        lastname: newlastname
    }

    persons.push(newperson);
}
