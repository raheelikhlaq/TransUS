import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListedCarPage } from './listed-car.page';

const routes: Routes = [
  {
    path: '',
    component: ListedCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListedCarPageRoutingModule {}
