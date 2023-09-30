import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-ng-button',
  templateUrl: './my-ng-button.component.html',
  styleUrls: ['./my-ng-button.component.css']
})
export class MyNgButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type = "";
  @Input() label = "";
  @Input() alertType: any;


}
