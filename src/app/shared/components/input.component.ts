import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
})
export class InputComponent {
  @Input('hasError') hasError: boolean = false;
  @Input('errorMessage') errorMessage: string | null = null;
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('type') type: string = 'text';
  @Input('formControlName') formControlName: string = '';

  constructor() {}
}
