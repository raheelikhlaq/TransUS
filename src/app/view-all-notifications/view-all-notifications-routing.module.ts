import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllNotificationsPage } from './view-all-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllNotificationsPageRoutingModule {}
