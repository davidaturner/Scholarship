var people = {
    "people" : [
            {
                "id" : 1,
                "firstname" : "Joe",
                "lastname" : "Santos",
                "interests" : [
                    "reading",
                    "music"
                ]
            },
            {
                "id" : 2,
                "firstname" : "Anna",
                "lastname" : "Turner",
                "interests" : [
                    "music"
                ]
            },
            {
                "id" : 3,
                "firstname" : "Por",
                "lastname" : "Favor",
                "interests" : null
            }
    ]
}

console.log(JSON.stringify(people));
var porfavor = people.people[2];
console.log(porfavor.firstname + " " + porfavor.lastname);