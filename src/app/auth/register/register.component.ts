import { Component, inject, signal } from '@angular/core';
import { AuthStateService } from '../../shared/state/auth.state.service';
import { FormBuilder, Validators } from '@angular/forms';
import { InputHelpers } from '../../shared/helpers/input.helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(12)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(12)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    agreesToTerms: [false, Validators.requiredTrue],
  });

  hasSubmitted = signal<boolean>(false);

  inputHelpers: InputHelpers;

  constructor(private fb: FormBuilder) {
    this.inputHelpers = new InputHelpers(this.registerForm, this.hasSubmitted);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.hasSubmitted.set(true);
  }
}
