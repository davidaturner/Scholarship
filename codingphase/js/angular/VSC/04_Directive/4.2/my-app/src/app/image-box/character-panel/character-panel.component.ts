import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {
  testingBox = false;
  constructor() { }

  ngOnInit(): void {
  }

  showBox(): void {
    this.testingBox = !this.testingBox;
  }
}
