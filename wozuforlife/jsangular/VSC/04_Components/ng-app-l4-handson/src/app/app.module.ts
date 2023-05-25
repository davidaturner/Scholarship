import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';

// add the following import statement:
import { SkillsService } from './services/skills.service';
import { ContactsService } from './services/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
