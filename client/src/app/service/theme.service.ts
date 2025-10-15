import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = signal<string>(
    localStorage.getItem('theme') ?? 'night'
  );

  constructor() {}

  get getTheme() {
    return this.theme;
  }

  start() {
    let savedTheme: string | null = localStorage.getItem('theme');
    if (!savedTheme) {
      savedTheme = 'night';
    }
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  updateTheme(theme: string) {
    this.theme.set(theme)
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
