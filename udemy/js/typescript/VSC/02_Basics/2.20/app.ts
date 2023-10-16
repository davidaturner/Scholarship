console.log('Hello, World!');

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN, READ_ONLY, AUTHOR};

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

// enum - enumerated list
if (person.role == Role.READ_ONLY) {
  console.log(`${person.name} has Read Access Only.`);
}

enum Role2 {ADMIN = 100, READ_ONLY, AUTHOR};
enum Role3 {ADMIN = "ADMIN", READ_ONLY = "READ ONLY", AUTHOR=1000};

console.log(Role2.READ_ONLY);
console.log(Role3.READ_ONLY);
console.log(Role3.AUTHOR);

// any
let timeOfDay: any[];
timeOfDay = ['Morning', 'Afternoon', 1800];
console.log(timeOfDay[2]);


