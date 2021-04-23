import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMotorPageRoutingModule } from './edit-motor-routing.module';

import { EditMotorPage } from './edit-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMotorPageRoutingModule
  ],
  declarations: [EditMotorPage]
})
export class EditMotorPageModule {}
