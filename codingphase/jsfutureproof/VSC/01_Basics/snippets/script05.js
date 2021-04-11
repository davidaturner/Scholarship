// alert('Hello from JS')

// All number methods return new values.
// The original values do not change.
var x = (((2 + 4) / 2) + 5 * 2) - 16
console.log(x)

// toFixed()
var y = 133
console.log(x  / y)
console.log( (x / y).toFixed(3))
var x1 = 3334.255.toFixed(1)
console.log(x1)

// isInteger() isSafeInteger()
// SafeInteger means return true if isInteger
// AND within to plus and minus ranges of MaxInteger
var x2 = Number.isInteger(x1)
console.log(x2)
console.log(Number.isInteger(Math.pow(2, 3)))
console.log(Number.isSafeInteger(12345678901234567890))

// isNaN()
console.log(isNaN('stan'))
console.log(isNaN(x1))
console.log(isNaN('234'))

// valueOf()
var y1 = '200'
// y1 = '200'.valueOf()
console.log(x1 - y1)

// toString()
// console.log('The number is: %s!',100.toString())
console.log('The number is: %s!', x)
// console.log('The number is: %s!',x.toString())
console.log(y + " is the key!")

var mary = {
    name: "mary",
    age: 29
}
console.log (mary)
console.log(mary.name + " is " + mary.age + ' years old.')

// (Scenario) if charley had 16 apples, lose 2 of them but then a
// friend gives charley the same number of apples charley has left
// in his hand, how many apples can charley split evenly, when he
// gets home, to his 3 brothers.
var charleyTotal = 16;
charleyTotal -= 2;
charleyTotal += (16 - 2)
charleyTotal /= (3 + 1)
console.log(charleyTotal)
// or simply
console.log(((16 - 2) * 2) / 4)