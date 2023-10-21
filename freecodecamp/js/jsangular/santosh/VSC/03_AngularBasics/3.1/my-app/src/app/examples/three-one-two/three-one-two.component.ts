import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-one-two',
  templateUrl: './three-one-two.component.html',
  styleUrls: ['./three-one-two.component.css']
})
export class ThreeOneTwoComponent implements OnInit {

  helloworld: string = "Hello, World";
  joesantos: string = "Joe Santos";

  getJoeSantos() : void {
    console.log(this.joesantos);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
