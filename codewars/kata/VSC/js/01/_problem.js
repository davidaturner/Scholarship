/*
Problem:
Sum of Digits / Digital Root
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input 
will be a non-negative integer.
*/

/*
Examples:
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/*
Questions:
1. What if n is a single digit?
2. Can n be 0?
3. Can n be less than zero?
4. Is n a decimal only? Can it be hexidecimal?
5. What if n is a non decimal/string/Nan?
*/

/*
Approach: Recursive. Obvious due to problem statement.
Data structure: Array/List
Input: int
Output: int
Abstraction: var digital_root = function(num)

Speculation:
1. Can be single digit. If so, return single digit.
2. Can be zero but cannot be less than zero. If less than zero, return -1
3. Limit calculation to hexidecimal. TO-DO.
4. Time complexity of a toString() is O n / linear time. Space = O n*m
5. Found an article Number() vs parseInt()
Examples:
console.log(Number('a')); // NaN
console.log(Number('1')); // 1
console.log(Number('5e2')); // 500
console.log(Number('16px')); // NaN
console.log(Number('3.2')); // 3.2

console.log(parseInt('a')); // NaN
console.log(parseInt('1')); // 1
console.log(parseInt('5e2')); // 5
console.log(parseInt('16px')); // 16
console.log(parseInt('3.2')); // 3
6. Test number is an integer. Number.isInteger(value)
7. Update: Do I need to use an Array? Unnecessary step.
*/

/* Code snippets*/
var check_input = function(num) {

    // Must test in addition to isInteger.
    if (num == null || num == '') return false;

    // Test if number and that it is not signed/negative
    let test_number = Number(num);
    return Number.isInteger(test_number) && test_number > 0
}

// console.log("Check '1': " + check_input('16'))
// console.log("Check '942': " + check_input('942'))
// console.log("Check '132189': " + check_input('132189'))
// console.log("Check '493193': " + check_input('493193'))
// console.log("Check '0': " + check_input('0'))
// console.log("Check '0.0': " + check_input('0.0'))
// console.log("Check '16px': " + check_input('16px'))
// console.log("Check '3.2': " + check_input('3.2'))
// console.log("Check '-16': " + check_input('-16'))
// console.log("Check 'Hello, World!': " + check_input('Hello, World'))
// console.log("Check '': " + check_input(''))

var toList = function(num) {
    var store = []
    if (check_input(num)) {
        // O n
        var tostring = (num).toString()
        // O n
        for(let i=0; i<tostring.length; i++) {
            store[i] = Number(tostring[i])
        }
    }
    return store
}

// console.log(toList(16))
// console.log(toList(942))
// console.log(toList(132189))
// console.log(toList(493193))

/*
	 Testing
*/
var testobjs = [
    { number:"16", root:"7"},
    { number:"942", root:"6"},
    { number:"132189", root:"6"},
    { number:"493193", root:"2"},
    { number:"1", root:"1"},
    { number:"0", root:"0"},
    { number:"-16", root:"-1"},
    { number:"16px", root:"-1"},
    { number:"Hello, World!", root:"-1"},
    { number:"84", root:"3"}
]

var testjson = [
    { "number":"16", "root":"7"},
    { "number":"942", "root":"6"},
    { "number":"132189", "root":"6"},
    { "number":"493193", "root":"2"},
    { "number":"1", "root":"1"},
    { "number":"0", "root":"0"},
    { "number":"-16", "root":"-1"},
    { "number":"16px", "root":"-1"},
    { "number":"Hello, World!", "root":"-1"},
    { "number":"84", "root":"3"}
]

const json = 
{
	"testjson": [{
			"1": {
				"number": "16",
				"root": "7"
			}
		},
		{
			"2": {
				"number": "942",
				"root": "6"
			}
		}
	]
}

// const json_ex = '{"number": "Hello, World!", "root":"-1"}';
// const obj = JSON.parse(json_ex);
// console.log(obj)
// console.log(obj.number)
// console.log(obj.root)

console.log("Hello, World!")

const verify = (json) => {
    for(let i=0; i<json.length; i++) {
    	console.log(json[i])
    }
}

// verify(testobjs)
verify(testjson)
// verify(json)



