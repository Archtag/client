import { FormGroup, ReactiveFormsModule } from '@angular/forms';

export function isInputInvalid(
  form: FormGroup,
  controlName: string,
  isSubmitted: boolean
): boolean {
  return (
    (form.get(controlName)?.invalid &&
      (form.get(controlName)?.dirty ||
        form.get(controlName)?.touched ||
        isSubmitted)) ||
    false
  );
}
