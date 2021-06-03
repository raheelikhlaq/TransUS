import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyNewCodePageRoutingModule } from './verify-new-code-routing.module';

import { VerifyNewCodePage } from './verify-new-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyNewCodePageRoutingModule
  ],
  declarations: [VerifyNewCodePage]
})
export class VerifyNewCodePageModule {}
