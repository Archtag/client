import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
})
export class InputComponent {
  @Input('errorMessage') error: string | null = null;
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';

  constructor() {}
}
