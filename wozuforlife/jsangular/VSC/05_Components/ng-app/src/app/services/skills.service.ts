import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level';

// Services are used to provide common functionality to various components 
// throughout your application. Signified by the decorator @Injectable, Services 
// are the primary source of information and data for a component. They are used 
// to control the flow of data to and from components.

// Components should not fetch or save data directly. Components should only 
// focus on displaying the data they are passed and delegating data access to 
//a service
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
    {
      id: 0,
      name: 'Abstrct Mathematics',
      level: Level.Expert
    },
    {
      id: 1,
      name: 'Philosophy',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Developing Software',
      level: Level.Expert
    }
  ];

  constructor() { }
}
