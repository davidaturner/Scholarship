// Code by Steve!

// var person = "Steve"
// function logPerson() {
//     console.log(person)
// }

// Better code using namespace steveApp.
var steveApp = {}
steveApp.person = "Steve"
steveApp.logPerson = function() {
    console.log(steveApp.person)
}