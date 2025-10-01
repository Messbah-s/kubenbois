import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-custom-snackbar',
  imports: [
    NgClass
  ],
  templateUrl: './custom-snackbar.html',
  styleUrl: './custom-snackbar.css'
})
export class CustomSnackbar {
  message = '';
  visible = false;
  isError: boolean = false;

  showSuccess(message: string, duration = 3000) {
    this.message = message;
    this.visible = true;
    this.isError = false;
    setTimeout(() => (this.visible = false), duration);
  }

  showError(message: string, duration = 3000) {
    this.message = message;
    this.visible = true;
    this.isError = true;
    setTimeout(() => (this.visible = false), duration);
  }
}
