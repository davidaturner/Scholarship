import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing from scratch
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapHomeComponent } from './bootstrap-home/bootstrap-home.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { MasterButtonComponent } from './master-button/master-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    MasterButtonComponent
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
        path: '**',
        component: BootstrapHomeComponent
      }      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
