import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSubject: BehaviorSubject<string> = new BehaviorSubject('night');

  constructor() {}

  public selectThemeState() {
    return this.themeSubject.asObservable();
  }

  start() {
    let savedTheme: string | null = localStorage.getItem('theme');
    if (!savedTheme) {
      savedTheme = 'night';
    }
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  updateTheme(theme: string) {
    this.themeSubject.next(theme);
  }
}
