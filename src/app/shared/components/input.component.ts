import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class InputComponent {
  @Input('hasError') hasError: boolean = false;
  @Input('errorMessage') errorMessage: string | null = null;
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('type') type: string = 'text';
  @Input('inputId') inputId: string = '';
  @Input('control') control: FormControl = new FormControl();

  constructor() {}
}
