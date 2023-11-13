// functions can have a return type.
// but you should never need to explicitly specify.
// function add(n1: number, n2: number) : number {
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(5, 2));

// no return type - void.
function printResult(n: number):void {
// function printResult(n: number) {
  console.log(`result: ${n}`);
}

printResult(add(5, 2));