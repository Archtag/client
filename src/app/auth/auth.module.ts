import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routes.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from '../shared/components/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [RegisterComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputComponent,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
