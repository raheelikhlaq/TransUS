import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterOfferPage } from './enter-offer.page';

const routes: Routes = [
  {
    path: '',
    component: EnterOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterOfferPageRoutingModule {}
