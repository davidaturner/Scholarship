import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './layouts/app-home/app-home.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { ThankyouComponent } from './layouts/thankyou/thankyou.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: 'movie/:title',
    component: MovieComponent
  },
  {
    path: 'movie/:title/schedule',
    component: ScheduleComponent
  },
  {
    path: 'movie/:title/schedule/checkout',
    component: CheckoutComponent
  },
  {
    path: 'movie/:title/schedule/checkout/thank-you',
    component: ThankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
