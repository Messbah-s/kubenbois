import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-custom-form-input',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './custom-form-input.html',
  styleUrl: './custom-form-input.css'
})
export class CustomFormInput {
  @Input() placeholder: string = 'placeHolder';
  @Input() hasError: boolean = true;
  @Input() errorMessage: string = 'errorMessage';
  @Input() type: 'text' | 'password' | 'email' | 'tel' | 'date' | 'number' = 'text';
  @Input({required: true}) inputForm!: FormControl<string>;
  @Input() icon: string | undefined;
}
