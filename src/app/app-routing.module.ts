import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch : 'full'},
  {path : 'Landing-page', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
