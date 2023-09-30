// Javascript object notation (JSON)
// text based format
// browser decoded
// lightweight; good esp for mobile web services

// Extensible markup language (XML)
// markup language (similar to HTML)
// must encode at client; decode at server
// heavy; more data to transmit. slower performance.
// does support comments and namespaces

// XML
{/* <persons>
    <person>
        <id>1</id>
        <firstname>John</firstname>
        <firstname>Smith</firstname>
        <interests>
            <interest>reading</interest>
            <interest>games</interest>
            <interest>music</interest>
        </interests>
    </person>
</persons> */}

// Javascript object.
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