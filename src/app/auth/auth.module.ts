import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routes.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from '../shared/components/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    ResetPasswordComponent,
    CheckEmailComponent,
    ValidateEmailComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputComponent,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class AuthModule {}
