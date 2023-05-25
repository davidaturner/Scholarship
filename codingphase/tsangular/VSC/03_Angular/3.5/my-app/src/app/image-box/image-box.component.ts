import { Component, OnInit } from '@angular/core';
import { ImageBoxService } from './services/image-box.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {

  service:ImageBoxService;
  // specific the array of objects.
  characters: Array<{name: string, planet:string}>;

  // dependency injection all services
  constructor(service: ImageBoxService) { 
    this.service = service;
    this.characters = [];
  }

  ngOnInit(): void {
    this.characters = this.service.getCharacters();
    console.log(this.characters[0]);
  }

}
