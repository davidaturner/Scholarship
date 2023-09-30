import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.css']
})
export class MasterButtonComponent implements OnInit {
  @Input() type : string = "Type";
  @Input() title : string = "Title";

  constructor() {}

  ngOnInit(): void {}

  getTitle() {
    console.log(this.title);
    return this.title;
  }
}
