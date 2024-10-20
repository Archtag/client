import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
})
export class InputComponent {
  @Input('hasError') hasError: boolean = false;
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('type') type: string = 'text';
  @Input('inputId') inputId: string = '';
  @Input('control') control: FormControl = new FormControl();
  @Input('errorMessages') errorMessages: Record<string, string> = {};

  constructor() {}

  get currentErrorMessage(): string | undefined {
    const errorKeys = Object.keys(this.control.errors!);
    return this.errorMessages[errorKeys[0]] || this.errorMessages['default'];
  }
}
