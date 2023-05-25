import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    skills: Skill[];
    dataService: SkillsService;

  constructor(private skillService:SkillsService) { 
    this.skills = [];
    this.dataService = skillService;
  }

  ngOnInit(): void {
    this.skills = this.dataService.skills;
  }

}
