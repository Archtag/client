import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputHelpers } from '../../shared/helpers/input.helpers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SignInComponent {
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
  });

  inputHelpers: InputHelpers;
  hasSubmitted = signal<boolean>(false);

  constructor(protected fb: FormBuilder) {
    this.inputHelpers = new InputHelpers(this.signInForm, this.hasSubmitted);
  }

  onSubmit() {
    console.log(this.signInForm.value);
    this.hasSubmitted.set(true);

    if (this.signInForm.invalid) return;
  }
}
