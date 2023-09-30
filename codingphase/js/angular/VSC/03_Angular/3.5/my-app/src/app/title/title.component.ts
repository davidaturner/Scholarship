import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = "This is the new trip!";

  constructor() { }

  ngOnInit(): void {
  }

  helloworld() {
      return "Hello, World!";
  }
}
