import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
  coverURL = "https://images-na.ssl-images-amazon.com/images/I/81RGLkxRhqL.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
