// to execute created js, don't forget - node index.js

// Data types for typescript
    // string
    // numbeer
    // boolean
    // array
    // enum
    // tuples 
    // any 
    // void 
    // never

// Type can INFER what type your variable is
// But it is not guaranteed. Explicitly type then.
let fname = "Joe"
// fname = 12 Error. Type number is not assignable to type string.
fname = "Paul"
console.log(fname)

// Explicitly type then
let age:number = 25
// age = "Brand" Error. Type string is not assignable to type number.
age = 31
console.log(age)

// Default value for boolean is False?
let married:boolean;
// console.log(married) Type variable is being used before it is 
// assigned - undefined.
married = false
console.log(married)

// Multiple ways to define arrays in TS
let myList = []
myList.push("London")
let item = myList.pop()
console.log(item)
myList.push(2445)
myList.push(true)
console.log(myList)

let myList2 : string[] = []
// myList2.push(10) Errs. Argument of type number is not assignable to array 
// of type string.
myList2.push("Daisy")

let myList3 : Array<string> = ["Paul", "John", "George", "Ringo"];
console.log(myList3.filter((b) => b != "John")) // Paul, George, Ringo
// console.log(myList2.find((b) => b === "Daisy")) // find - not working for me.

// Wrong way to use enums (see index.js)
enum NoForColor {
    Red, 
    Blue, 
    Yellow
}

// Better way to use enums (values auto-set this way; no need for enum)
const enum Color {
    Red,
    Blue,
    Yellow
}

console.log(Color.Red)  // console.log(0)

let color:Color = Color.Blue // color = 1
console.log(color)  // console.log(1)

// tuple
let tupleof_two_numbers : [number, number]
// let tuple2of_two_numbers : [first:number, second:number]

function swap(a:number, b:number) : [number, number] {
    return [b, a]
}
// function swap(a:number, b:number) {
//     return [b, a]    // returns number[], not a tuple - [number, number]
// }
// function swap(a, b) {   // Error: a and b is considered 'any'
//     return [b, a]       
// }

tupleof_two_numbers = swap(10, 20)
console.log(tupleof_two_numbers)
console.log(tupleof_two_numbers[0])


// avoid 'any' - can set restriction in tsconfig.json

// null - must be implicitly set
console.log(null)

// default state - does not need to be set
console.log(undefined)


