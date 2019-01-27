import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageOneRoutingModule } from './login-page-one-routing.module';
import { LoginOneComponent } from './login-one/login-one.component';

@NgModule({
  declarations: [LoginOneComponent],
  imports: [
    CommonModule,
    LoginPageOneRoutingModule
  ]
})
export class LoginPageOneModule { }
