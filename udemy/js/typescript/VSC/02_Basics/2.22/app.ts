console.log('Hello, World!');

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role2 { ADMIN="ADMIN", READ_ONLY="READ ONLY", AUTHOR="AUTHOR" };

// const person = {
//   name: 'Joe Santos',
//   age: 30,
//   hobbies: ['Skiing', 'Chess'],
//   employee: [1, 'Joe Santos']
// }
const person : { // explict type
  name: string;
  age: number;
  hobbies: string[],
  employee: [number, string]
  role: number;
} = {           // inference type/ JS object
  name: 'Joe Santos',
  age: 30,
  hobbies: ['Skiing', 'Chess'],
  employee: [1, 'Joe Santos'],
  role: Role.READ_ONLY
}

// union types
// function combine(a: number, b: number) {
//   return a + b;
// }
function combine(a: number | string | Role2, b: number | string) {
  let result;
  if (typeof a == 'number' && typeof b == 'number') {
    result = a + b;
  } else {
    result = a.toString() + " " + b.toString();
  }
  return result;
}
let example1 = combine(2, 3);
console.log(example1);
let example2 = combine("Hello", "World!");
console.log(example2);
let example = combine(Role2.AUTHOR, "J.R.R. Tolkein");
console.log(example);


