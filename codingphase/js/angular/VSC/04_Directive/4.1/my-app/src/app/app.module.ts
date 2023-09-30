import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { ImageBoxCharacterPanelComponent } from './image-box/image-box-character-panel/image-box-character-panel.component';

import { ImageBoxService } from './image-box/services/image-box.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    ImageBoxCharacterPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
