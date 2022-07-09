// These are NOT good examples of Javascript Object Notation!
// The following are simply Javascript Objects!.
const people = {
    "person" : {
        "smith" : {"firstName":"John", "lastName":"Smith", "interests":["reading", "games", "music"]},
        "thomas" : {"firstName":"Kevin", "lastName":"Thomas", "interests":null},
        "white" : {"firstName":"Anna", "lastName":"White", "interests":["music"]}
    }
}

const persons = [
        {"firstName":"John", "lastName":"Smith", "interests":["reading", "games", "music"]},
        {"firstName":"Kevin", "lastName":"Thomas", "interests":null},
        {"firstName":"Anna", "lastName":"White", "interests":["music"]}
    ];


function yella() {
    console.log(people.person.smith);
    console.log(people.person.thomas);
    console.log(people.person.white);

    persons.forEach((item, index) => {
        console.log(item);
    })


    alert('Check console.log!')
}

yella();
