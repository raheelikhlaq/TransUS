import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBikeDetailPage } from './view-bike-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBikeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBikeDetailPageRoutingModule {}
