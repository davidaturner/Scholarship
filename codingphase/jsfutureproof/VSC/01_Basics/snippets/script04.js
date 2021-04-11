// alert('Hello from JS')

// Operators
var x = 10

x += 200
console.log(x)

var y = 300
y -= x
console.log(y)

var johndoe = "john" + " " + "doe"
console.log(johndoe)

var mynameis = "my name is "
mynameis += johndoe
console.log(mynameis)

x = 10
var z = "10"
console.log('Comparing %s %s', x, z)
console.log(x + z)
console.log(x == z)
console.log(x === z)

console.log(2 < 5)
console.log(2 <= 2)

console.log((5 === 5)?"Yes":"No")
console.log(5 && 5)
console.log(3 && 2)
console.log(1 && 2)
console.log(1 || 2)

var mary = {
    name: 'mary',
    age: '18'
}
console.log('%s is %s years old', mary.name, mary.age)
if (mary.name == 'mary' && mary.age >= '18') {
    console.log('let mary in please')
} else {
    console.log('do not let in')
}