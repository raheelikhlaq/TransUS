import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlutterWavesPageRoutingModule } from './flutter-waves-routing.module';

import { FlutterWavesPage } from './flutter-waves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlutterWavesPageRoutingModule
  ],
  declarations: [FlutterWavesPage]
})
export class FlutterWavesPageModule {}
