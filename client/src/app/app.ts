import {Component, effect, inject, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
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
  private alertService = inject(AlertService);
  private themeService = inject(ThemeService);

  theme = this.themeService.getTheme;

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  ngOnInit() {
    this.themeService.start();
  }

  ngAfterViewInit() {
    this.alertService.register(this.snackbar);
  }
}
