import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllNotificationsPageRoutingModule } from './view-all-notifications-routing.module';

import { ViewAllNotificationsPage } from './view-all-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllNotificationsPageRoutingModule
  ],
  declarations: [ViewAllNotificationsPage]
})
export class ViewAllNotificationsPageModule {}
