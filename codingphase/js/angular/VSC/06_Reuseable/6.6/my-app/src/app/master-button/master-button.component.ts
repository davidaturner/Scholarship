import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.css']
})
export class MasterButtonComponent implements OnInit {
  @Input() type : string = "Type";
  @Input() title : string = "Title";

  @Output() alertType = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clicked(type:string) {
    this.alertType.emit(type);
    console.log('button clicked. type: ' + type);
  }
}
