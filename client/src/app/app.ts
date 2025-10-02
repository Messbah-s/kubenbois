import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {ThemeService} from './service/theme.service';
import {CustomSnackbar} from './components/custom-snackbar/custom-snackbar';
import {AlertService} from './service/alert-service';
import {NavBar} from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomSnackbar, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild(CustomSnackbar) snackbar!: CustomSnackbar;
  theme$: Observable<string> = new Observable();

  constructor(private alertService: AlertService,
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

  ngAfterViewInit() {
    this.alertService.register(this.snackbar);
  }
}
