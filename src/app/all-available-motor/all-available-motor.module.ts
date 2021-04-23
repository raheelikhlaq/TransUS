import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAvailableMotorPageRoutingModule } from './all-available-motor-routing.module';

import { AllAvailableMotorPage } from './all-available-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAvailableMotorPageRoutingModule
  ],
  declarations: [AllAvailableMotorPage]
})
export class AllAvailableMotorPageModule {}
