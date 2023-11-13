function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number) {
  console.log(`result: ${n}`);
}

let mystery : any = add;
// let mystery = add;
console.log(mystery(11, 2));

// scenario 1:
// mystery = printResult; // function
// mystery = 5;            // assigned to number
// console.log(mystery(1, 4)); // runtime error

// scenario 2:
// let mystery2 : Function = add;
// // mystery2 = 5; // compile error
// mystery2 = printResult;
// console.log(mystery2(1, 4)); // no error but does not do what is intended

// scenario 3:
let mystery3 : (a: number, b: number) => number
mystery3 = add;
// mystery3 = printResult; // compile error
printResult(mystery3(22, 1));


