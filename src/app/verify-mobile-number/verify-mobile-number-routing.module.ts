import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyMobileNumberPage } from './verify-mobile-number.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyMobileNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyMobileNumberPageRoutingModule {}
