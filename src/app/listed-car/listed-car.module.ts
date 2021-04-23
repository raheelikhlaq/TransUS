import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListedCarPageRoutingModule } from './listed-car-routing.module';

import { ListedCarPage } from './listed-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListedCarPageRoutingModule
  ],
  declarations: [ListedCarPage]
})
export class ListedCarPageModule {}
