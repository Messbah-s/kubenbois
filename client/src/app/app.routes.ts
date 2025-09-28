import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./components/views/main-menu/main-menu').then(c => c.MainMenu)
  },
  {
    path: '**', redirectTo: '/'
  },
];
