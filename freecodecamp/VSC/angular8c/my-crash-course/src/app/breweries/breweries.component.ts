import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {

  http: HttpService;
  breweries : Object;

  constructor(http: HttpService) {
    this.http = http;
    this.breweries = new Object();
  }

  ngOnInit() {
    this.http.getBreweries()
    .subscribe(
      data => this.breweries = data,
      error => console.log(error)
    );
  }
}
