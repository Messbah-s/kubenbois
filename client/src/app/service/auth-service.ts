import {Injectable} from '@angular/core';
import {LoginStateService} from '../stateService/login-state-service';
import RegisterRequest = Kubenbois.RegisterRequest;
import {BehaviorSubject, finalize, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AlertService} from './alert-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerLoadingStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loginLoadingStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private loginStateService: LoginStateService,
              private alertService: AlertService,
              private router: Router) {
  }

  public selectRegisterLoadingState(): Observable<boolean> {
    return this.registerLoadingStateSubject.asObservable();
  }

  public selectLoginLoadingState(): Observable<boolean> {
    return this.loginLoadingStateSubject.asObservable();
  }

  public register(registerData: RegisterRequest) {
    this.registerLoadingStateSubject.next(true);
    this.loginStateService.registerAction(registerData).pipe(
      finalize(() => this.registerLoadingStateSubject.next(false))
    )
      .subscribe({
        next: (_) => {
          this.router.navigate(['login']).then();
          this.alertService.showSuccess('Inscription terminé');
        },
        error: (_) => {
          this.alertService.showError('Inscription échoué');
        }
      });
  }

  logUser(username: string, password: string) {
    this.loginStateService.loginAction(username, password).subscribe({
      next: (_) => this.router.navigate(['']).then(),
      error: (_) => this.alertService.showError('Identifiants incorrecte, veuillez réessayer'),
    });
  }

  logout() {
    this.loginStateService.logoutAction().subscribe({
      next: (_) => this.router.navigate(['login']).then(),
    });
  }
}
