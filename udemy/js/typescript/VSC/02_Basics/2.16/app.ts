console.log('Hello, World!');
// object type
// const personType: object = {
//     name: 'Joe Santos',
//     age: 39
// }
// console.log(personType.name); //property 'name' does not exist on 'object.
const personType2: {
    name: string,
    age: number
} = {
    name: 'Joe Santos',
    age: 39
}
console.log(personType2.name);

// object
const person = {
    name: 'Bobby Choom',
    age: 23
}
console.log(person);

// nested object
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product.details);