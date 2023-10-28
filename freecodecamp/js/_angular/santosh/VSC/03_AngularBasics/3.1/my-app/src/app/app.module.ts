import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeOneOneComponent } from './examples/three-one-one/three-one-one.component';
import { ThreeOneTwoComponent } from './examples/three-one-two/three-one-two.component';
import { ThreeOneThreeComponent } from './examples/three-one-three/three-one-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeOneOneComponent,
    ThreeOneTwoComponent,
    ThreeOneThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
