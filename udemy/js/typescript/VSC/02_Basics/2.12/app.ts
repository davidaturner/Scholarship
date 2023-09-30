// javascript approach - dynamic any inputs must be type checking
// in runtime.
// function add(a:any, b:any) {
//     if (typeof a !== 'number' && typeof b !== 'number') {
//         throw new Error('Error in input!');
//     }
//     return a + b;
// }
// typescript approach - static non any types are checked before runtime.
function add(a:number, b:number) {
    return a + b;
}
const number1 = 5; // numbers are floats - 5.0
const number2 = 18.5;
var result = add(number1, number2);
console.log(result);
// const number1five = '15';
// result = add(number1five, number2);
// console.log(result);
let myfive;
myfive = 'MyFive';
myfive = 5;
console.log("%d", myfive);