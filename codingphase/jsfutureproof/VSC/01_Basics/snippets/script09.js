// alert('Hello from JS')

// Functions

var username = function (name) {
    console.log(`My name is ${name}.`)
}
// Must use after variable is defined.
username('Joe')
username('Jeff')
username('Jennifer')

// May use before function is defined
lastname('Santos')
function lastname(lastname) {
    console.log("The user lastname is %s", lastname)
}

var c = add(2,8)
function add(a, b) {
    return a + b
}
console.log(c)

var multiplex = function(a1, a2, b) {
    return add(a1, a2) * b
}
console.log("Multiplex: " + multiplex(4, 10, 3))

var dividesby2 = function(a) {
    return a / 2
}
console.log("Divides: " + dividesby2(add(95, 5)))

var mygrade = (name, subject, grade) =>
{
    var name = name.toUpperCase()
    return{
        name: name,
        subject: subject,
        grade: grade
    }
}

var johnny = mygrade('Johnny Storm', 'English', 99)
console.log(johnny)