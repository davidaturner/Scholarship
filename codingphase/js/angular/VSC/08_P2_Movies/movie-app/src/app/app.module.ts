import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './layouts/app-home/app-home.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { ThankyouComponent } from './layouts/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    CheckoutComponent,
    MovieComponent,
    ScheduleComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
