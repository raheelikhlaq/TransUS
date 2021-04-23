import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionBookingPage } from './action-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ActionBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionBookingPageRoutingModule {}
