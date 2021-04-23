import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListedMotorPage } from './listed-motor.page';

const routes: Routes = [
  {
    path: '',
    component: ListedMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListedMotorPageRoutingModule {}
