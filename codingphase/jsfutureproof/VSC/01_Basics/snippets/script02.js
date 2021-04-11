// alert('Hello from JS')

// Numbers
var total = (2 + 6) * 4 + 4
console.log(total)

// String
var myName = 'Joe'
console.log(myName)
console.log(`Hi! My name is ${myName}.`)

// boolean
var studentPassed = true;
console.log(!studentPassed)
console.log(studentPassed === true)
if (studentPassed) {
    console.log("Indeed! Student has passed.")
} else{
    console.log("Sorry! Student has failed.")
}

// Array
var userData = ['Joe', 67, 75, 'Danny', 'James']
console.log(userData)

// Object
var person = { name: 'Joe', age: '29', degrees : ['BA', 'BS'] }
console.log(person.name)
console.log(person.degrees)
person = { name: 'Joe', age: '29', degrees : function() {
    return ['MA', 'MS']
} }
console.log('I have the following degrees: ', person.degrees())

// Undefined
var bestTeam;
console.log(bestTeam)

// Null
var carSold = null;
console.log(null)