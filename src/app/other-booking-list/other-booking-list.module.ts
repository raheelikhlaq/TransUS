import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherBookingListPageRoutingModule } from './other-booking-list-routing.module';

import { OtherBookingListPage } from './other-booking-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherBookingListPageRoutingModule
  ],
  declarations: [OtherBookingListPage]
})
export class OtherBookingListPageModule {}
