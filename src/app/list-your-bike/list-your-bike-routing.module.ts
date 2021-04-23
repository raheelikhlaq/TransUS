import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListYourBikePage } from './list-your-bike.page';

const routes: Routes = [
  {
    path: '',
    component: ListYourBikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListYourBikePageRoutingModule {}
