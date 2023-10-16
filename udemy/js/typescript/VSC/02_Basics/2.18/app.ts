console.log('Hello, World!');

const person = {
  name: 'Joe Santos',
  age: 30,
  hobbies: ['Skiing', 'Chess']
}

console.log(person.hobbies);

let sports : string[] = ["Skiing", "Chess"];

let mixed = ["Hello", 1, 2.34, true];

// for of
for(let hobby of person.hobbies) {
  console.log(hobby);
}