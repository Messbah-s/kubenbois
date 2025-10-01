import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, switchMap, take} from 'rxjs';
import {AuthHttpService} from '../httpService/auth-http-service';
import {UserToken} from '../definitions/interface/user-token.interface';
import {jwtDecode} from 'jwt-decode';
import RegisterRequest = Kubenbois.RegisterRequest;
import {AlertService} from '../service/alert-service';
import LoginResponse = Kubenbois.LoginResponse;

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

  private authStateSubject: BehaviorSubject<LoginStateInterface> = new BehaviorSubject<LoginStateInterface>(this.state);

  constructor(private authHttpService: AuthHttpService,
              private alertService: AlertService) {
  }

  private updateState(newState: LoginStateInterface): void {
    this.state = newState;
    this.authStateSubject.next(this.state);
  }

  public selectLoginState(): Observable<LoginStateInterface> {
    return this.authStateSubject.asObservable();
  }

  public selectLoginStatus(): Observable<boolean> {
    return this.authStateSubject.asObservable().pipe(map((value) => value.loginStatus === 'LOGGED'));
  }

  public initLoginAction(): Observable<LoginStateInterface> {
    const newState: LoginStateInterface = {
      ...this.state,
      loginStatus: 'INIT_LOGIN',
    };
    this.updateState(newState);
    const accessToken: string | null = localStorage.getItem('access_token');
    const refreshToken: string | null = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      return this.loginSuccessAction(accessToken, refreshToken);
    } else {
      this.loginFailureAction(false);
      return of();
    }
  }

  public loginByTokenAction(accessToken: string, refreshToken: string): Observable<void> {
    const newState: LoginStateInterface = {
      ...this.state,
      loginStatus: 'START_LOGIN',
      hasError: false,
    };
    this.updateState(newState);

    return this.loginSuccessAction(accessToken, refreshToken).pipe(switchMap(() => of(undefined)));
  }

  public loginAction(username: string, password: string): Observable<LoginStateInterface> {
    const newState: LoginStateInterface = {
      ...this.state,
      loginStatus: 'START_LOGIN',
      hasError: false,
    };
    this.updateState(newState);

    return this.authHttpService.login(username, password).pipe(
      switchMap((value) => {
        const accessToken: string | null = value.token;
        const refreshToken: string | null = value.refreshToken;
        if (accessToken && refreshToken) {
          return this.loginSuccessAction(accessToken, refreshToken);
        } else {
          this.loginFailureAction(true);
          return of();
        }
      }),
    );
  }

  public logoutAction(): Observable<void> {
    const newState: LoginStateInterface = {
      ...this.state,
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

    return of(undefined);
  }

  private loginSuccessAction(accessToken: string, refreshToken: string): Observable<LoginStateInterface> {
    const newState: LoginStateInterface = {
      ...this.state,
      loginStatus: 'SUCCESS',
    };
    this.updateState(newState);
    const decodedAccessToken: UserToken = jwtDecode<UserToken>(accessToken);

    return this.logUserAction(
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
      ...this.state,
      loginStatus: 'FAILURE',
      hasError: hasError,
    };
    this.updateState(newState);
    this.logoutAction().pipe(take(1)).subscribe();
  }

  private logUserAction(
    accessToken: string,
    sub: string,
    id: number,
    remember: boolean,
    exp: Date,
    refreshToken: string,
  ): Observable<LoginStateInterface> {
    const newState: LoginStateInterface = {
      ...this.state,
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

    return of(newState);
  }

  public registerAction(data: RegisterRequest): Observable<LoginResponse> {
    const newState: LoginStateInterface = {
      ...this.state,
    };
    this.updateState(newState);

    return this.authHttpService.register(data).pipe(
      catchError((err) => {
        this.updateState({
          ...this.state,
          hasError: err.error.message,
        });
        if (err.error.code.includes('UsernameAlreadyTaken')) {
          this.alertService.showError('Email déjà utilisé');
        } else {
          this.alertService.showError("Erreur lors de l'inscription, veuillez réessayer");
        }
        return of();
      }),
    );
  }
}
