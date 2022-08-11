/*
JSON Syntax
1. JSON data is written in curly braces.
2. Data is represented as data value pairs.
3. Keys should be enclosed in double quotes.
4. Key and value should be separated by colon (:)
5. Comma (,) is used to separate data.

JSON values/types
1. number
2. string
3. boolean
4. null
5. array
6. object

For an editor to write json. Look online
https:\\www.jsoneditoronline.org
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
