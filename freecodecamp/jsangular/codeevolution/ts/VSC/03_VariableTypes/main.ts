export {}

const title = "Hello, World!";

let isMarried: boolean = true;
let age: number = 29;
let name: string = "Joe Santos";

// template string - 
// can span multiple lines
// can have expressions
let sentence = `Hi my name is ${name}.
I am a beginner at Typescript.`

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null; // error; type 'null' is not assignable to type (boolean)
// let myName: string = undefined; // error; 'undefined' is not assigned to type (string)

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list2);

// tuples
let person1: [string, number] = ["Joe", 29];

// enum
// enum Color {Red, Green, Blue}; // values 0, 1, 2
enum Color {Red = 5, Green, Blue}; // values 5, 6, 7
let c: Color = Color.Green;
console.log(c);

// any - when you simply don't know what var type beforehand.
let randomValue : any = 10;
randomValue = true;
randomValue = "Boo Berry";

// 'benefit' for using 'any'
// clearly used to converted code into JS
let myVariable: any = 10;
// myVariable();                   // no error; no check; fails at runtime.  
// myVariable.uppercase();         // no error; no check; fails at runtime.
console.log(myVariable);

// sample function to test type assertion
function hasName( obj: any) : obj is  { name: string } {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj
}
console.log(myVariable.name); // no error; no check; see check below - hasName
if (hasName(myVariable)) {
    myVariable.name = "Hester";
    console.log("Hester");
} else {
    console.log("name not found");
}

// unknown
let story: unknown = 10;
// console.log(story.name); // error; 'story' is of type 'unknown'
// story();                   // error; 'story' is of type 'unknown'  
// story.uppercase();         // error; 'story' is of type 'unknown'
// (story as String).toUpperCase(); // no error; 'unknown' is type asserted; fails at runtime
console.log((story as String))

// union type
// useful for handling data not under your control.
// such as retrieving or sending data to API.
// unlike 'any', 'union' type once assigned has that type's functions available.
let mt: number | boolean;
mt = false;
mt = 20;
console.log(mt.toString()); 

