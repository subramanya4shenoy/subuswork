import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOneComponent } from '../login-page-one/login-one/login-one.component';

const routes: Routes = [
  {
    path: '',
    component: LoginOneComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginPageOneRoutingModule { }
