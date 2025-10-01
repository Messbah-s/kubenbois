import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomFormInput} from '../../components/custom-form-input/custom-form-input';
import {STRONG_PASSWORD_REGEX, VALID_EMAIL_REGEX} from '../validator/validator.regex';
import Validation from '../validator/validation';
import RegisterRequest = Kubenbois.RegisterRequest;
import {AuthService} from '../../service/auth-service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    CustomFormInput,
    AsyncPipe
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  loadingState$: Observable<boolean> = new Observable();
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loadingState$ = this.authService.selectRegisterLoadingState();
    this.registerForm = this.fb.group(
      {
        username: new FormControl<string>('', [Validators.required, Validators.pattern(VALID_EMAIL_REGEX)]),
        password: new FormControl<string>('', [Validators.required, Validators.pattern(STRONG_PASSWORD_REGEX)]),
        passwordConfirmation: new FormControl<string>('', [Validators.required]),
      },
      {
        validators: [Validation.match('password', 'passwordConfirmation')],
      },
    );
  }

  private getRegisterData(): RegisterRequest {
    return {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
    };
  }

  public getFormFromName(name: string) {
    return this.registerForm.get(name) as FormControl<string>;
  }

  public register() {
    this.authService.register(this.getRegisterData());
  }
}
