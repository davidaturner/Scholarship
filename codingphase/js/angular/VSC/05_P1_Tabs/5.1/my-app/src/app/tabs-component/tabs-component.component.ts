import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.css']
})
export class TabsComponentComponent implements OnInit {
  activeTab:string = 'tab-1';
  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab:string) {
    this.activeTab = tab;
    console.log(tab);
  }
}
