"use strict";
// nullish coalescing
// const userInput = undefined; // default
// const userInput = 'Boolean'; //Boolean
const userInput = '';
// const userInput = null; 'Defau lt'
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
