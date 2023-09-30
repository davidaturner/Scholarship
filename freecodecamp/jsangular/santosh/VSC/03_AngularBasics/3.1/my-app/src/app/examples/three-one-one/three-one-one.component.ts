import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-one-one',
  // templateUrl: './three-one-one.component.html',
  template:`
  <style>
    p {
      opacity: 0.65;
    }
    span {
      color: red;
    }
  </style>
    <h1>Hello, World!</h1>
    <p>This is from the inline template</p>
    <p>And it's freaking <span>awesome</span>!!</p>
    `,
  styleUrls: ['./three-one-one.component.css']
})
export class ThreeOneOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
