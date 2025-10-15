import {Component, inject, Signal} from '@angular/core';
import {Router} from '@angular/router';
import {LoginStateService} from '../../stateService/login-state-service';

@Component({
  selector: 'app-nav-bar',
  imports: [

  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  private router = inject(Router);
  private loginStateService = inject(LoginStateService);

  public loginState : Signal<boolean> = this.loginStateService.isLoggedIn;

  navigateToHome() {
    this.router.navigate(['']).then();
  }

  navigateToSettings() {
    this.router.navigate(['settings']).then();
  }

  navigateToLogin() {
    this.router.navigate(['login']).then();
  }

  navigateToLobby() {
    this.router.navigate(['lobby']).then();
  }
}
