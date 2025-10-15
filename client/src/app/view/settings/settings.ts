import {Component, effect, inject, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ThemeService} from '../../service/theme.service';
import {AuthService} from '../../service/auth-service';

@Component({
  selector: 'app-settings',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  private themeService = inject(ThemeService);
  private authService = inject(AuthService);

  theme = signal(this.themeService.getTheme());
  themes = ['night','light','dark','synthwave','forest','abyss'];

  constructor() {
    effect(() => {
      const value = this.theme();
      if (value) {
        this.themeService.updateTheme(value);
        localStorage.setItem('theme', value);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  setTheme(value: string) {
    this.theme.set(value);
  }
}
