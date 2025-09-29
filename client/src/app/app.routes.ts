import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./components/main-menu/main-menu').then(c => c.MainMenu)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./view/settings/settings').then(c => c.Settings),
  },
  {
    path: '**', redirectTo: '/'
  },
];
