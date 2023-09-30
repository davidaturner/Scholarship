console.log("Hello, Worlld!");

// operators.
var x = 10;
console.log(x);

console.log(2+2);

console.log(12-2);

console.log(3*6);

console.log(144/12);

console.log(145%12);

console.log(2**3);

console.log(x++);

console.log(--x);

x == 11
console.log(x);

var y = 2;
console.log(y);

x = x + y;
console.log(x);

x = 11;

x += y;
console.log(x);
var text1 = "john";
var text2 = "doe";

console.log(text1 + text2);

console.log(text1 + " " + text2);

console.log("5" + y);

var z = "2";

console.log(y == z);

console.log(y === z);

console.log(y != 5);

console.log(y != z);

console.log(y !== z);

console.log(5 == 2);

console.log(5 > 2);

console.log(5 <= 2);

console.log((y == z)?"Equal!":"Not Equal");

var isStudent = true;
var isMarried = false;

console.log(isStudent && !isMarried);

user = {
    name:"Joe",
    age: 29
}
console.log(user);

if (user.name == "Joe" && user.age == 29) {
    console.log("Let the user in!");
} else {
    console.log("Invalid user.");
}

function checkUser(name, age) {
    if (name == "Joe" && age == 29) {
        console.log("Let the user in!");
    } else {
        console.log("Invalid user.");
    }
}

checkUser(user.name, user.age);
checkUser(user.name, 28);

if (user.name == "Joe" || user.age == 13) {
    console.log("Let the user in!");
} else {
    console.log("Invalid user.");
}

data1 = ["Joe", "Santos"];
data2 = {};
data3 = null;

const isArray = Array.isArray(data1) && 'array'
const isObject = data2 == {} && 'object'
const isNull =  data3 == null && 'null'

const isGrouping =  isArray || isObject || isNull
const isCheck = !isGrouping ? typeof data : isGrouping

const isTypeData = ['number','string','array','symbol','object','undefined',
                    'null','function', 'boolean']
const isMatch = isTypeData.indexOf(isCheck)
const isResult = isTypeData[isMatch]

let literalString = 'This is a literal string';
console.log(literalString);
let stringObject  = new String('String created with constructor');
console.log(stringObject);

console.log(literalString instanceof String);  // false, string primitive is not a String
console.log(stringObject  instanceof String);  // true

console.log(literalString instanceof Object);  // false, string primitive is not an Object
console.log(stringObject  instanceof Object);  // true

console.log(stringObject  instanceof Date);    // false

// var instanceOfOperator = nameOfObject instanceof typeOfObject;

