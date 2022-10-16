// Every action triggers a reaction

// Variable var (general) or let (modern)
let username = 'Joe Santos'
console.log(username)
username = 'Big Joe Silly'
console.log(username)

// Const
const MACYS = "Macy's"
console.log(MACYS)

// Operators - symbols that tell the program to trigger
// an action

// String - any text enclosed in quotes.
console.log("Website: " + "Codingphase")
// console.log("Website:", "Codingphase")

// Numbers
// Order of operation PEMDAS
console.log((2 + 3 * 5 ** 3 - 14) % 6)

// Assignment operators
let abc = "doubting "
abc += "thomas"
console.log(abc)

// Objects - an entity that holds values and functions
employee = {
    employeeName: 'Joe Santos',
    age: 31,
    address: '123 Jackson Avenue, Pittsburgh, PA 15217',
    isMarried: true,
    greeting: function() {
        return "Hi " + this.employeeName + ", " + this.age + "."
    }
}

// comparative type == (equal to) vs == (equal to and equal type)
age = employee['age']
console.log(age)
console.log(employee['age'] == 31)
console.log(employee['age'] === 31)
console.log(age === employee['age'])
console.log(employee.age == 31 && employee['name'] != 'Jim Nabors')

// arrays
let listarr = [12, "abc", false, 'hunter', 224.45]
console.log(listarr[3])

console.log(employee.greeting())

// boolean
console.log(false)
console.log(4 < 10)

// control flow - expressions (value returned) vs statements
if (age >= 21) {
    console.log("Hi sir. Welcome to the Comedy Club!")
} else {
    console.log("Sorry you cannot be allowed to come in. 21+ only.")
}

console.log((10 < 29)?true:false)

// loops
string = ""
for(let i=0; i<11; i++) {
    console.log(`${employee.greeting()} - ${i}`)
    string += i + " "
}
console.log(string)

// NaN, null (empty), undefined
console.log(24 * "billy")
age = null
plane 
console.log(age)
console.log(plane)