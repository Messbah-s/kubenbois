import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {ThemeService} from './service/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  theme$: Observable<string> = new Observable();

  constructor(private router: Router,
              private themeService: ThemeService) {
    this.theme$ = this.themeService.selectThemeState();
    this.theme$.subscribe({
      next: (value) => {
        document.documentElement.setAttribute('data-theme', value);
      },
    });
  }

  ngOnInit() {
    this.themeService.start();
  }

  navigateToSettings() {
    this.router.navigate(['settings']).then();
  }
}
