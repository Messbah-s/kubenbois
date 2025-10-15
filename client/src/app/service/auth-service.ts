import {effect, inject, Injectable, signal} from '@angular/core';
import {LoginStateService} from '../stateService/login-state-service';
import RegisterRequest = Kubenbois.RegisterRequest;
import {Router} from '@angular/router';
import {AlertService} from './alert-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStateService: LoginStateService = inject(LoginStateService);
  private alertService: AlertService = inject(AlertService);
  private router: Router = inject(Router);

  private registerLoadingState = signal(false);
  private loginLoadingState = this.loginStateService.isLogging;

  constructor() {
    effect(() => {
      if (this.loginStateService.isLoggedIn()) {
        this.router.navigate(['']).then();
      }

      if (this.loginStateService.hasLoginError()) {
        this.alertService.showError('Identifiants incorrects, veuillez réessayer');
      }

      if (this.loginStateService.registerSuccess()) {
        this.registerLoadingState.set(false);
        this.alertService.showSuccess('Inscription terminée');
        this.router.navigate(['login']).then();
        this.loginStateService.registerSuccess.set(false);
      }

      if (this.loginStateService.registerError()) {
        this.registerLoadingState.set(false);
        this.loginStateService.registerError.set(null);
      }
    });
  }

  public selectRegisterLoadingState() {
    return this.registerLoadingState;
  }

  public selectLoginLoadingState() {
    return this.loginLoadingState;
  }

  public register(registerData: RegisterRequest) {
    this.registerLoadingState.set(true);
    this.loginStateService.registerAction(registerData);
  }

  logUser(username: string, password: string) {
    this.loginStateService.loginAction(username, password)
  }

  logout() {
    this.loginStateService.logoutAction()
    this.router.navigate(['login']).then();
  }
}
