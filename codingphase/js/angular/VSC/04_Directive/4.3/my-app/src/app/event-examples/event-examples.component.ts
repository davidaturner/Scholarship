import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-examples',
  templateUrl: './event-examples.component.html',
  styleUrls: ['./event-examples.component.css']
})
export class EventExamplesComponent implements OnInit {
  testingbox = false;

  firstname = "";
  lastname = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  showbox() : void {
    this.testingbox = !this.testingbox;
  }

  // mouseevent(): void {
  //   console.log("Event triggered!")
  // }
  childevent(event:any): void {
    event.stopPropagation();
    console.log("Child triggered!");
    // console.log(event);
  }

  parentevent(event:any): void {
    console.log("Parent triggered!");
    // console.log(event);
  }
}
