type Combinable = string | number;

// typescript only - overload functions
function add(a: number, b: number) : number;
function add(a: string, b: string) : string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const added = add("3", "44");
console.log(added.length);

console.log(add("3", "44"));
console.log(add(300, 25));



