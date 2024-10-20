import { Component, signal } from '@angular/core';
import { InputHelpers } from '../../shared/helpers/input.helpers';
import { FormBuilder, Validators } from '@angular/forms';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './reset-password.component.html',
  selector: 'app-reset-password',
})
export class ResetPasswordComponent {
  resetPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  inputHelpers: InputHelpers;
  hasSubmitted = signal<boolean>(false);
  faCircleInfoIcon = faCircleInfo;

  constructor(protected fb: FormBuilder) {
    this.inputHelpers = new InputHelpers(
      this.resetPasswordForm,
      this.hasSubmitted
    );
  }

  onSubmit() {
    console.log(this.resetPasswordForm.value);
    this.hasSubmitted.set(true);

    if (this.resetPasswordForm.invalid) return;
  }
}
