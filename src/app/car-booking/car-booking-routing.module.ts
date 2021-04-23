import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarBookingPage } from './car-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CarBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarBookingPageRoutingModule {}
