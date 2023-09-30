import { Manager } from './classes/manager';
import { Worker } from './classes/worker';

// make all TS exports. Add statement.
export {};

let billy = new Manager("Billy", 32, "New York City", "New York");
billy.fullwelcome();
billy.giveorders();

let momer = new Worker("Momer", 47, "Chicago", "Illinois");
momer.fullwelcome();
momer.takesorders();