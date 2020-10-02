import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', redirectTo: 'Landing-page', pathMatch : 'full'},
  {path : 'Landing-page', component: LandingpageComponent},
  {path : 'Login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
