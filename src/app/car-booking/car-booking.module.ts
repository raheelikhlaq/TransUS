import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBookingPageRoutingModule } from './car-booking-routing.module';

import { CarBookingPage } from './car-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarBookingPageRoutingModule,
 
  ],
  declarations: [CarBookingPage]
})
export class CarBookingPageModule {}
