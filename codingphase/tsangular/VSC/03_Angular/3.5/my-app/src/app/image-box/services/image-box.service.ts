import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageBoxService {

  constructor() { }

  getCharacters() {
    return [
      {
        name: 'David Turner',
        planet: 'Earth'
      },
      {
        name: 'Vegeta',
        planet: 'Vegeta'
      },
      {
        name: 'Piccolo',
        planet: 'Namek'
      }
    ]
  }
}
