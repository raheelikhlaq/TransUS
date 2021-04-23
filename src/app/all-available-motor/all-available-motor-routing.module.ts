import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAvailableMotorPage } from './all-available-motor.page';

const routes: Routes = [
  {
    path: '',
    component: AllAvailableMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAvailableMotorPageRoutingModule {}
