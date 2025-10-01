import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomFormInput} from '../../components/custom-form-input/custom-form-input';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CustomFormInput,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loadingState$: Observable<boolean> = new Observable();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loadingState$ = this.authService.selectLoginLoadingState();
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
