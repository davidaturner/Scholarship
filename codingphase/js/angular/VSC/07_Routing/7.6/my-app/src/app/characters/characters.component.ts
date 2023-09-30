import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  name:  string | null;
  planet: string | null;

  // example: http:/localhost:4200/characters/goku/vegeta
  constructor(private route: ActivatedRoute) {
    this.name = "";
    this.planet = "";
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.name = params.get('name');
        // console.log(params.get('name'));
        this.planet = params.get('planet');
      }
    )
  }

}
