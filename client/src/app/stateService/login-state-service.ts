import {computed, inject, Injectable, signal} from '@angular/core';
import {AuthHttpService} from '../httpService/auth-http-service';
import {UserToken} from '../definitions/interface/user-token.interface';
import {jwtDecode} from 'jwt-decode';
import RegisterRequest = Kubenbois.RegisterRequest;
import {AlertService} from '../service/alert-service';

export interface LoginStateInterface {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  id: number | null;
  isRemembered: boolean | null;
  expirationDate: Date | null;
  loginStatus: LoginStatusType;
  hasError: boolean;
}

export type LoginStatusType = 'INIT_LOGIN' | 'START_LOGIN' | 'SUCCESS' | 'FAILURE' | 'NOT_LOGGED' | 'LOGGED';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  private state: LoginStateInterface = {
    accessToken: null,
    refreshToken: null,
    username: null,
    id: null,
    isRemembered: null,
    expirationDate: null,
    loginStatus: 'NOT_LOGGED',
    hasError: false,
  };

  public loginState = signal<LoginStateInterface>(this.state);
  public registerSuccess = signal(false);
  public registerError = signal<string | null>(null);

  private authHttpService: AuthHttpService = inject(AuthHttpService);
  private alertService: AlertService = inject(AlertService);

  private updateState(partial: Partial<LoginStateInterface>) {
    this.loginState.update((prev) => ({ ...prev, ...partial }));
  }

  public isLoggedIn = computed(() =>
    this.loginState().loginStatus === 'LOGGED'
  );

  public isLogging = computed(() =>
    this.loginState().loginStatus === 'INIT_LOGIN' ||
    this.loginState().loginStatus === 'START_LOGIN'
  );

  public hasLoginError = computed(
    () =>
      this.loginState().loginStatus === 'FAILURE' ||
      this.loginState().hasError
  );

  public loginAction(username: string, password: string): void {
    const newState: LoginStateInterface = {
      ...this.loginState(),
      loginStatus: 'START_LOGIN',
      hasError: false,
    };
    this.updateState(newState);

    this.authHttpService.login(username, password).subscribe({
      next: (value) => {
        const accessToken = value.token;
        const refreshToken = value.refreshToken;

        if (accessToken && refreshToken) {
          this.loginSuccessAction(accessToken, refreshToken);
        } else {
          this.loginFailureAction(true);
        }
      },
      error: (err) => {
        this.loginFailureAction(true);
      }
    });
  }

  public logoutAction(): void {
    const newState: LoginStateInterface = {
      ...this.loginState(),
      accessToken: null,
      refreshToken: null,
      username: null,
      id: null,
      isRemembered: null,
      expirationDate: null,
      loginStatus: 'NOT_LOGGED',
    };
    this.updateState(newState);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  private loginSuccessAction(accessToken: string, refreshToken: string): void {
    const newState: LoginStateInterface = {
      ...this.loginState(),
      loginStatus: 'SUCCESS',
    };
    this.updateState(newState);
    const decodedAccessToken: UserToken = jwtDecode<UserToken>(accessToken);

    this.logUserAction(
      accessToken,
      decodedAccessToken.sub,
      decodedAccessToken.id,
      decodedAccessToken.remember,
      decodedAccessToken.exp,
      refreshToken,
    );
  }

  private loginFailureAction(hasError: boolean): void {
    const newState: LoginStateInterface = {
      ...this.loginState(),
      loginStatus: 'FAILURE',
      hasError: hasError,
    };
    this.updateState(newState);
    this.logoutAction();
  }

  private logUserAction(
    accessToken: string,
    sub: string,
    id: number,
    remember: boolean,
    exp: Date,
    refreshToken: string,
  ): void {
    const newState: LoginStateInterface = {
      ...this.loginState(),
      accessToken: accessToken,
      refreshToken: refreshToken,
      username: sub,
      id: id,
      isRemembered: remember,
      expirationDate: exp,
      loginStatus: 'LOGGED',
    };
    this.updateState(newState);
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  public registerAction(data: RegisterRequest): void {
    this.authHttpService.register(data).subscribe({
      next: (res) => {
        this.registerSuccess.set(true);
        this.registerError.set(null);
      },
      error: (err) => {
        this.registerError.set(err.error.message);
        this.registerSuccess.set(false);
        const isUsernameTaken = err.error.code?.includes('UsernameAlreadyTaken');
        this.alertService.showError(isUsernameTaken ? 'Email déjà utilisé' : "Erreur lors de l'inscription, veuillez réessayer");
      },
      complete: () => {}
    });
  }
}
