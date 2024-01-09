const username = "Max";

var result;
// function add(a:number, b:number) {
//     result = a + b;
//     return result;
// }

// console.log(result);
// console.log(add(2, 12));

const age = 29;
if (age > 20) {
    let isOld = true;
    console.log(isOld);
}
// console.log(isOld); out-of-block scope
const add = (a:number, b:number) => a + b; // implicit return
console.log(add(2, 12));

const greeting : (name: string) => void = output => console.log(`Hi ${output}`);
const greet = (name: string) => console.log(name);

greeting("Jack");
greet("Florence");

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}