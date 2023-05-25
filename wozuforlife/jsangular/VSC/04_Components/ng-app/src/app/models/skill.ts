import { Level } from '../types/level';

// When using a class to define information, each class will live in a new 
// folder named models. This folder is used to model the data in your 
// application. 
export class Skill {
  id: number;
  name: string;
  level: Level;
//   level: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.level = Level.Beginner;
    // this.level = "";
  }
}
