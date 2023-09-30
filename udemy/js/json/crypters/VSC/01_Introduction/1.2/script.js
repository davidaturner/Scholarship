// Javascript object notation (JSON)
//
// { "persons" :
//      { 
//          "1": { "firstname": "John", "lastname": "Smith", 
//          "interests": ["reading", "games", "music"] },
//          "2": { "firstname": "Kevin", "lastname": "Turner", 
//          "interests": null },
//          "3": { "firstname": "Anna", "lastname": "White", 
//          "interests": ["music"] }
//      }
//  }

// Javascript object literal.
var persons = [
    {
        id: '1',
        firstname: 'John',
        lastname: 'Smith',
        interests: [
            'reading',
            'games',
            'music'
        ]
    },
    {
        id: '2',
        firstname: 'Kevin',
        lastname: 'Turner',
        interests: []
    },
    {
        id: '3',
        firstname: 'Anna',
        lastname: 'White',
        interests: [
            'music'
        ]
    }
]

var fullname = (persons) => persons.firstname + " " + persons.lastname;

console.log(fullname(persons[0]));
console.log(persons[0].interests[0]);