import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './layouts/app-home/app-home.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { ThankyouComponent } from './layouts/thankyou/thankyou.component';
import { HeaderComponent } from './layouts/shared/header/header.component';
import { FooterComponent } from './layouts/shared/footer/footer.component';
import { PageExampleComponent } from './layouts/shared/page-example/page-example.component';
import { PageHeaderComponent } from './layouts/shared/page-header/page-header.component';
import { MainLayoutComponent } from './layouts/shared/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    CheckoutComponent,
    MovieComponent,
    ScheduleComponent,
    ThankyouComponent,
    HeaderComponent,
    FooterComponent,
    PageExampleComponent,
    PageHeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
