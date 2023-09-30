// Javascript object (constructor)
var person1 = new Object();
person1.firstName = "Joe";
person1.lastName = "Santos";
person1.fullName = function() {
    return this.firstName + " " + this.lastName;
}

console.log(person1.fullName());

// Javascript object literal 
var person2 = {
    firstName: "Joe",
    lastName : "Santos",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person2.fullName());

// JSON data (object)
// Do NOT use single quotes.
var person3 = { "firstName": "Joe", "lastName" : "Santos"};
console.log(person3);

// JSON data (string)
// Do NOT use single quotes.
var person4 = '{"firstName":"Joe","lastName":"Santos"}';
console.log(person4);

// OR
var person5 = JSON.stringify(person2);
console.log(person5);
