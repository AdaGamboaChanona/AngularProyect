import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', redirectTo: 'Login', pathMatch : 'full'},
  {path : 'Landing-page', component: LandingpageComponent},
  {path : 'Login', component: LoginComponent},
  {path : 'Dashboard', component: DashboardComponent},
  {path : 'Register', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
