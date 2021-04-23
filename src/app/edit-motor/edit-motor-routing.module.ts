import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMotorPage } from './edit-motor.page';

const routes: Routes = [
  {
    path: '',
    component: EditMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMotorPageRoutingModule {}
