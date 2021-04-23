import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FurtherDetailPage } from './further-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FurtherDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FurtherDetailPageRoutingModule {}
