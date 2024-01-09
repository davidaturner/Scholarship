const username = "Max";

var result;
function add(a:number, b:number) {
    result = a + b;
    return result;
}

console.log(result);
console.log(add(2, 12));

const age = 29;
if (age > 20) {
    let isOld = true;
    console.log(isOld);
}
// console.log(isOld); out-of-block scope