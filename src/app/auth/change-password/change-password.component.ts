import { Component, signal } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { InputHelpers } from '../../shared/helpers/input.helpers';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  changePasswordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  inputHelpers: InputHelpers;
  hasSubmitted = signal<boolean>(false);

  constructor(protected fb: FormBuilder) {
    this.inputHelpers = new InputHelpers(
      this.changePasswordForm,
      this.hasSubmitted
    );
  }

  onSubmit() {
    console.log(this.changePasswordForm.value);
    this.hasSubmitted.set(true);

    if (this.changePasswordForm.invalid) return;
  }
}
