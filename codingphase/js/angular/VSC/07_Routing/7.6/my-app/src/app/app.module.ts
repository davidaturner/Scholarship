import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapHomeComponent } from './bootstrap-home/bootstrap-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { MasterButtonComponent } from './master-button/master-button.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapHomeComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    MasterButtonComponent,
    ImageBoxComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BootstrapHomeComponent
      },
      {
        path: 'image-box',
        component: ImageBoxComponent
      },
      {
        path: 'master-button',
        component: MasterButtonComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'characters/:name/:planet',
        component: CharactersComponent
      },
      {
        path: '**',
        component: BootstrapHomeComponent
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
