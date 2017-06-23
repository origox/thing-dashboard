import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceListComponent } from './devices/device-list/device-list.component';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  { path: 'devices', component: DeviceListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }