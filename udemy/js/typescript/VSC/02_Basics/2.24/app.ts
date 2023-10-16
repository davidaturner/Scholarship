console.log('Hello, World!');

// type alias
type number_string = number | string;
// type conversions = 'to-string' | 'to-number';
type person = { name: string, age: number };

// literal types
// 'to-string' 'to-number'
// to use as alternatives to enum or boolean
// strengthens type safety
function combine(
    a: number_string, 
    b: number_string,
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

// using types in a function
function greetingsFrom(user:person) {
  console.log(`Hi! My name is ${user.name}, age ${user.age}.`);
}

let example1 = combine(2, 3);
console.log(example1);
example1 = combine(2, 3, 'to-string');
console.log(example1);
example1 = combine('2', '3', 'to-number');
console.log(example1);
let example2 = combine("Hello ", "World!");
console.log(example2);

// let joesantos = {
//   name: 'Joe Santos',
//   age: 39
// }
const joesantos : person = {
  name: 'Joe Santos',
  age: 39
}
greetingsFrom(joesantos);


