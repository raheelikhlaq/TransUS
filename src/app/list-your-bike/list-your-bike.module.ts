import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListYourBikePageRoutingModule } from './list-your-bike-routing.module';

import { ListYourBikePage } from './list-your-bike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListYourBikePageRoutingModule
  ],
  declarations: [ListYourBikePage]
})
export class ListYourBikePageModule {}
