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
  min: string | null;
  max: string | null;

  // example: ttp://localhost:4200/characters/goku/vegeta?min=15&max=20
  constructor(private route: ActivatedRoute) {
    this.name = "";
    this.planet = "";
    this.min = "";
    this.max = "";
   }

  ngOnInit(): void {
    // params
    this.route.paramMap.subscribe(
      (params) => {
        this.name = params.get('name');
        // console.log(params.get('name'));
        this.planet = params.get('planet');
      }
    )
    // query params
    this.route.queryParamMap.subscribe(
      (params) => {
        this.min = params.get('min');
        // console.log(params.get('min'));
        this.max = params.get('max');
        console.log(this.min);
      }
    )
  }

}
