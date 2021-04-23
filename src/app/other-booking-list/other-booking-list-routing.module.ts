import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherBookingListPage } from './other-booking-list.page';

const routes: Routes = [
  {
    path: '',
    component: OtherBookingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherBookingListPageRoutingModule {}
