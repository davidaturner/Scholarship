// alert('Hello from JS')

// Strings
var joe = 'joe'
console.log("My name is " + joe)

console.log(joe.length)

console.log(joe.toUpperCase())

console.log(joe.substr(0,2))
console.log(joe.substring(1,2))

var jerrywasaracecardriver = "jerry was a race car driver"
var phase = jerrywasaracecardriver.split(" ")
console.log(phase[3])

var check = jerrywasaracecardriver.includes('plastic')
var pos = jerrywasaracecardriver.search('was')
console.log(check)
console.log(pos)

var filer = "/usr/topper/src/lunch.html".split("/")
console.log(filer)
filer.forEach(function(f) {
    console.log(f)
})
