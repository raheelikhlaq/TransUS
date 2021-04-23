import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarningPageRoutingModule } from './earning-routing.module';

import { EarningPage } from './earning.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarningPageRoutingModule,
    ChartsModule
  ],
  declarations: [EarningPage]
})
export class EarningPageModule {}
