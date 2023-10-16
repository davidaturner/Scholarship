console.log('Hello, World!');

// literal types
// 'to-string' 'to-number'
// to use as alternatives to enum or boolean
// strengthens type safety
function combine(
    a: number | string, 
    b: number | string,
    convert?: 'to-string' | 'to-number'
) 
{
  let result;
  if (typeof a == 'number' && typeof b == 'number') {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }

  if (convert !== undefined) {
    return (convert === 'to-number') ? +result:result.toString();
  }

  return result;
}


let example1 = combine(2, 3);
console.log(example1);
example1 = combine(2, 3, 'to-string');
console.log(example1);
example1 = combine('2', '3', 'to-number');
console.log(example1);
let example2 = combine("Hello ", "World!");
console.log(example2);


