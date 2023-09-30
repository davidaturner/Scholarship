import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { CharacterPanelComponent } from './image-box/character-panel/character-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    CharacterPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
