import { Manager } from './classes/Manager.js';
import { Worker } from './classes/Worker.js';

// To compile under ES2016,
// Make sure all imports have .js (not the .ts) ext.
function welcome(name:string, age: number|undefined) : void {
  console.log(`Hello ${name}, ${age}!`)
}

let user1 = new Worker("Joe", 28, "New Haven", "CT");
user1.welcome();

let user2 = new Manager("Bob", 28, "Pittsburgh", "PA");
welcome(user2.Name, user2.Age);

user2.giveOrder(user1.Name, "Make the coffee!");
user1.doesTask(user2.Name);

export {};