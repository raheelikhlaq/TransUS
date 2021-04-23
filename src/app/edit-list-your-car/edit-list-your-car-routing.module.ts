import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditListYourCarPage } from './edit-list-your-car.page';

const routes: Routes = [
  {
    path: '',
    component: EditListYourCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditListYourCarPageRoutingModule {}
