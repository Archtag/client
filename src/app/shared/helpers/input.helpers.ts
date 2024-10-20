import { Signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class InputHelpers {
  private form: FormGroup;
  private isSubmitted: Signal<boolean>;

  constructor(form: FormGroup, isSubmitted: Signal<boolean>) {
    this.form = form;
    this.isSubmitted = isSubmitted;
  }

  isInputInvalid(controlName: string): boolean {
    return (
      (this.form.get(controlName)?.invalid &&
        (this.form.get(controlName)?.touched || this.isSubmitted())) ||
      false
    );
  }
}
