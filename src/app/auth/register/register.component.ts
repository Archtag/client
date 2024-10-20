import { Component, inject, signal } from '@angular/core';
import { AuthStateService } from '../../shared/state/auth.state.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { InputHelpers } from '../../shared/helpers/input.helpers';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  passwordsDoMatch = signal<boolean>(true);

  hasSubmitted = signal<boolean>(false);

  inputHelpers: InputHelpers;

  constructor(private fb: FormBuilder) {
    this.inputHelpers = new InputHelpers(this.registerForm, this.hasSubmitted);

    this.registerForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((val) => {
        if (val.password === val.confirmPassword) {
          this.passwordsDoMatch.set(true);
        } else if (
          this.hasSubmitted() &&
          this.registerForm.get('confirmPassword')?.touched &&
          this.registerForm.get('password')?.touched
        ) {
          this.passwordsDoMatch.set(false);
        }
      });
  }

  onSubmit() {
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) return;

    this.hasSubmitted.set(true);
  }
}
