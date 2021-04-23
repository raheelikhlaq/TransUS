import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListYourCarPageRoutingModule } from './list-your-car-routing.module';

import { ListYourCarPage } from './list-your-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListYourCarPageRoutingModule
  ],
  declarations: [ListYourCarPage]
})
export class ListYourCarPageModule {}
