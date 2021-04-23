import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterOfferPageRoutingModule } from './enter-offer-routing.module';

import { EnterOfferPage } from './enter-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterOfferPageRoutingModule
  ],
  declarations: [EnterOfferPage]
})
export class EnterOfferPageModule {}
