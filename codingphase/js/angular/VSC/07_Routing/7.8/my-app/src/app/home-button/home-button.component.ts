import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  clickedA = () => {
    console.log("I'm clicked");
    this.router.navigate(['/']);
  }

  clickedB = () => {
    console.log("I'm clicked");
    this.router.navigate(['image-box']);
  }

  // characters/:name/:planet
  clickedC = () => {
    console.log("I'm clicked");
    this.router.navigate(['characters', 'piccolo', 'namek']);
  }

  // characters/:name/:planet?min=20&max=50
  clickedD = () => {
    console.log("I'm clicked");
    this.router.navigate(['characters', 'piccolo', 'namek'],
        {queryParams: {
          min: "20",
          max: "50"
        }
      });
  }
}
