import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionBookingPageRoutingModule } from './action-booking-routing.module';

import { ActionBookingPage } from './action-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionBookingPageRoutingModule
  ],
  declarations: [ActionBookingPage]
})
export class ActionBookingPageModule {}
