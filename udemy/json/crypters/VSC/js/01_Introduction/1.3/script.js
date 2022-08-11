/*
    JSON vs Javascript Object

The following is Valid JSON, but it won't run in Javascript
{
    "persons" : {
        "1" : {"firstname":"John", "lastname":"Smith", "interests": ["reading", "games"]},
        "2" : {"firstname":"Kevin", "lastname":"Turner", "interests": null},
        "3" : {"firstname":"Anna", "lastname":"White", "interests": ["music"]}
    }

    To make into JSON string or data:
    1. Enclose the keys or property in double quotes.
    2. Do not use single quotes.
}
*/
var person1 = new Object()

person1["firstname"] = "John"
person1["lastname"] = "Smith"
console.log(person1)
console.log(person1.firstname + " " + person1.lastname)

person1.interests = ["reading", "games"]
for(i of person1.interests) {
    console.log(i)
}

var person2 = {
    firstname: 'Kevin',
    lastname: 'Turner',
    interests: null
}

console.log(person2.firstname + " " + person2.lastname)
person2["interests"] = ['reading', 'games']
console.log(person2)

for(i of person2.interests) {
    console.log(i)
}
