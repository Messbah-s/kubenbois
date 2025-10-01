import { Injectable } from '@angular/core';
import {CustomSnackbar} from '../components/custom-snackbar/custom-snackbar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private snackbarComponent!: CustomSnackbar;

  public register(snackbar: CustomSnackbar) {
    this.snackbarComponent = snackbar;
  }

  public showSuccess(message: string, duration = 3000) {
    this.snackbarComponent?.showSuccess(message, duration);
  }

  public showError(message: string, duration = 3000) {
    this.snackbarComponent?.showError(message, duration);
  }
}
