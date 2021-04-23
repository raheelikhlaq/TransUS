import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditListYourCarPageRoutingModule } from './edit-list-your-car-routing.module';

import { EditListYourCarPage } from './edit-list-your-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditListYourCarPageRoutingModule
  ],
  declarations: [EditListYourCarPage]
})
export class EditListYourCarPageModule {}
