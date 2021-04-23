import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FurtherDetailPageRoutingModule } from './further-detail-routing.module';

import { FurtherDetailPage } from './further-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FurtherDetailPageRoutingModule
  ],
  declarations: [FurtherDetailPage]
})
export class FurtherDetailPageModule {}
