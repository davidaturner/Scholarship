/* Dependency injection */
// Instead of creating an object within a function,
// pass an object into a function.

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
/* 
    the variable john and for that matter the class Person represent
    dependencies. Any change and logPerson would have to be
    reviewed and probably retested.
*/
// function logPerson() {

//     var john = new Person("John", "Doe");
//     console.log(john)
// }

// Better - remove dependencies from logPerson and inject them instead.
function logPerson(person) {
    console.log(person)
}

var john = new Person("John", "Doe")
logPerson(john);