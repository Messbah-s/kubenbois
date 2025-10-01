import {Component, ViewChild} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {map, Observable} from 'rxjs';
import {ThemeService} from './service/theme.service';
import {CustomSnackbar} from './components/custom-snackbar/custom-snackbar';
import {AlertService} from './service/alert-service';
import {LoginStateService} from './stateService/login-state-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomSnackbar, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild(CustomSnackbar) snackbar!: CustomSnackbar;
  theme$: Observable<string> = new Observable();
  loginState$: Observable<boolean> = new Observable();

  constructor(private router: Router,
              private alertService: AlertService,
              private loginStateService: LoginStateService,
              private themeService: ThemeService) {
    this.theme$ = this.themeService.selectThemeState();
    this.loginState$ = this.loginStateService.selectLoginState().pipe(map(value => value.loginStatus !== "LOGGED"));
    this.theme$.subscribe({
      next: (value) => {
        document.documentElement.setAttribute('data-theme', value);
      },
    });
  }

  ngOnInit() {
    this.themeService.start();
  }

  ngAfterViewInit() {
    this.alertService.register(this.snackbar);
  }

  navigateToHome() {
    this.router.navigate(['']).then();
  }

  navigateToSettings() {
    this.router.navigate(['settings']).then();
  }

  navigateToLogin() {
    this.router.navigate(['login']).then();
  }
}
