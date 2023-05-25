let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let o = text.search("w3schools");
let p = text.search(/w3schools/i);

// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping 
//     after the first match)	
// m	Perform multiline matching

console.log(n);
console.log(o);
console.log(p);

let text2 = "Visit Microsoft!";
console.log(text2);
let result2 = text2.replace("Microsoft", "W3Schools");
console.log(result2);

let text3 = "Visit Microsoft!";
let result3 = text.replace(/microsoft/i, "W3Schools");
console.log(result3);

const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));

console.log(/e/.test("The best things in life are free!"));

// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |
console.log(/[xyz]/.test("Hello, World!"));
console.log(/[Wxyz]/.test("Hello, World!"));
console.log(/[WXYZ]/.test("Hello, World!"));

let text4 = "re, green, red, green, gren, gr, blue, yellow";
let result4 = text4.match(/(red|green)/g);
console.log(result4);

// I could NOT get ^ nor $ to return any results.
console.log(/its$/.test("Its love to bits"));
console.log(/its$/.test("Its love to bits!"));
console.log("Its love to bits".match(/its/i));
console.log("Its love to bits".match(/^Its/));
console.log("Its love to bits".match(/its$/));
console.log("Its love to bits".match(/its/g));

// The Regex ?, +, and * all have special meanings.

// The ? means that the preceding character is optional
// The + means one or more of the previous character
// The * means zero or more of the previous character.

console.log(/bana?na/.test("banana"));
console.log(/bana?na/.test("banna"));
console.log(/bana?na/.test("banaana"));

console.log(/bana+na/.test("banana"));
console.log(/bana+na/.test("banaana"));
console.log(/bana+na/.test("banna"));

console.log(/bana*na/.test("banana"));
console.log(/bana*na/.test("banna"));
console.log(/bana*na/.test("banaaana"));
console.log(/bana*na/.test("bnana"));

console.log(/^[a-z]/.test("banana"));
console.log(/^[a-z]/.test("Banana"));
console.log(/^[a-zA-Z]/.test("Banana"));
console.log(/^[a-zA-Z]/.test("12345"));