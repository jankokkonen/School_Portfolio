import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

const routes: Routes = [
  { path: '', component: PhonelistComponent },
  { path: 'details/:id', component: PhoneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
