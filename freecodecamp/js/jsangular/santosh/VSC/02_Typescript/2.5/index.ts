// function with optional parameter
const add = function(a:number, b:number, c?:number) : number {
    return (c != undefined)? a + b + c : a + b;
}
// console.log(add(1, 2, 3));
// console.log(add(1, 2));

// function with required (defaulted) parameter
const subtract = (a:number, b:number = 10) : number => a - b;

// console.log(subtract(3, 7));
// console.log(subtract(3));

// using rest parameter
function add2 (a: number, b: number, ...c:number[]) {
    return a + b + c.reduce( (a, b) => a + b, 0);
}

// let numbers = [3, 4, 5];
// console.log(add2(1, 2, ...numbers));
// console.log(add2(1, 2, 3, 4, 5, 6))

// generics
function concatItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

console.log(concatItems([1, 2, 3, 4, 5]));
console.log(concatItems(['a', 'b', 'c', 'd', 'e']));