import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageBoxService {

  constructor() { }
  
  getCharacters() {
    return [
      {
        name: "Goku",
        planet:  "Earth"
      },
      {
        name: "Vegeta",
        planet:  "Vegeta"
      },
      {
        name: "Piccolo",
        planet:  "Namek"
      }
    ]
  }
}
