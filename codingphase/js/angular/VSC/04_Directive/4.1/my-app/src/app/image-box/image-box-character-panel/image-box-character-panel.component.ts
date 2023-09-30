import { Component, OnInit } from '@angular/core';
import { ImageBoxService } from '../services/image-box.service';

@Component({
  selector: 'app-image-box-character-panel',
  // templateUrl: './html/ib-character-panel_0.html',
  templateUrl: './image-box-character-panel.component.html',
  styleUrls: ['./image-box-character-panel.component.css']
})
export class ImageBoxCharacterPanelComponent implements OnInit {
  service: ImageBoxService;
  characters: Array<{name: string, planet:string}>
  testingbox = false;

  constructor(service: ImageBoxService) { 
    this.service = service;
    this.characters = [];
  }

  ngOnInit(): void {
    this.characters = this.service.getCharacters();
  }

  togglebox() : void {
    this.testingbox = !this.testingbox;
  }
}
