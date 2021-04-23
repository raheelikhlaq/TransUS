import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlutterWavesPage } from './flutter-waves.page';

const routes: Routes = [
  {
    path: '',
    component: FlutterWavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutterWavesPageRoutingModule {}
