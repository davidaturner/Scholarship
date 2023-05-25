let midArray = [12, 13];
let normArray = [1, 2, 3, midArray, 4, 5];
console.log(normArray)

// That is not exactly what you wanted to accomplish. Instead of just 
// adding the values of midArray to the list of values in normArray, it 
// created a multi-dimensional array: an array within an array. There may be 
// some cases where this is needed, but that is not your current goal. You want 
// the array to look like [1, 2, 3, 12, 13, 4, 5]. That is where the spread 
// operator comes in.

normArray = [1, 2, 3, ...midArray, 4, 5];
console.log(normArray)

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h'];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let obj1 = { name: 'John', age: 29 };
let obj2 = { name: 'Alice', email: 'alice@email.com' };

let mergeObj = { ...obj1, ...obj2 };

console.log(mergeObj);
// Output: {name: "Alice", age: 29, email: "alice@email.com"}