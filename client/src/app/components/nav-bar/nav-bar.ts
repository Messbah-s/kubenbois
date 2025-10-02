import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {map, Observable} from 'rxjs';
import {LoginStateService} from '../../stateService/login-state-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    AsyncPipe
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  loginState$: Observable<boolean> = new Observable();

  constructor(private router: Router,
              private loginStateService: LoginStateService,) {
    this.loginState$ = this.loginStateService.selectLoginState().pipe(map(value => value.loginStatus !== "LOGGED"));
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

  navigateToLobby() {
    this.router.navigate(['lobby']).then();
  }
}
