import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBikeDetailPageRoutingModule } from './view-bike-detail-routing.module';

import { ViewBikeDetailPage } from './view-bike-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBikeDetailPageRoutingModule
  ],
  declarations: [ViewBikeDetailPage]
})
export class ViewBikeDetailPageModule {}
