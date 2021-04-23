import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListYourCarPage } from './list-your-car.page';

const routes: Routes = [
  {
    path: '',
    component: ListYourCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListYourCarPageRoutingModule {}
