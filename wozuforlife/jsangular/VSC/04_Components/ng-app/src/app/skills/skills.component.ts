import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
// import { Level } from '../types/level';

import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;
  //   skills: Skill[] = [
  //   {
  //     id: 0,
  //     name: 'Abstract Mathematics',
  //     level: Level.Expert
  //   },
  //   {
  //     id: 1,
  //     name: 'Philosophy',
  //     level: Level.Advanced
  //   },
  //   {
  //     id: 2,
  //     name: 'Developing Software',
  //     level: Level.Expert
  //   }
  // ];
  // skills = ['Abstract Mathematics', 'Philosophy', 'Developing software'];

  // Now that you have successfully imported SkillsService, you need to add that 
  // service to the constructor of the SkillsComponent class, this is where you 
  // will be using dependency injection.
  constructor(private skillsService: SkillsService) {
    this.skills = [];
    this.dataService = skillsService;
    // this.skills = skillsService.skills;
  }
  // constructor() { 
  //   this.skills = [];
  // }

  // ngOnInit is 
  // a life-cycle method that is part of Angular and is executed after the 
  // constructor. Due to this, it is considered a best practice to not do any 
  // work within the constructor and only pass parameters to be used for 
  // Dependency Injection. You then need to add the functionality needed 
  // within the ngOnInit life-cycle method, located after the constructor.
  ngOnInit(): void {
    this.skills = this.dataService.skills;
  }

}
