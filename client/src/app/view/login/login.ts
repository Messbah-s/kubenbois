import {Component, inject, Signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomFormInput} from '../../components/custom-form-input/custom-form-input';
import {AuthService} from '../../service/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    CustomFormInput,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loadingState: Signal<boolean> = this.authService.selectLoginLoadingState();
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      login: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  public getFormFromName(name: string) {
    return this.loginForm.get(name) as FormControl<string>;
  }

  login() {
    this.authService.logUser(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
  }
}
