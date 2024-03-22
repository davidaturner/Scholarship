// nullish coalescing

// const userInput = undefined; default
// const userInput = 'Boolean'; Boolean
const userInput = ''; // ''
// const userInput = null; 'Default'

const storedData = userInput ?? 'Default';

console.log(storedData);
