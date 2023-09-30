import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  // selector: 'app-master-button',
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.css']
})

// 6.1
// export class MasterButtonComponent implements OnInit {
//   @Input() type = "";
//   @Input() label = "";

//   constructor() {}

//   ngOnInit(): void {
//   }
// }

export class MasterButtonComponent extends AppComponent {
  @Input() type = "";
  @Input() label = "";

  @Output() alert: EventEmitter<string> = new EventEmitter();

  makeAlert(message:string){
      this.alert.emit(message);
  }
}
