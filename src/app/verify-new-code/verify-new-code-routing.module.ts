import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyNewCodePage } from './verify-new-code.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyNewCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyNewCodePageRoutingModule {}
