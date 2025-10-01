import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./view/main-menu/main-menu').then(c => c.MainMenu)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./view/settings/settings').then(c => c.Settings),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./view/register/register').then(c => c.Register),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./view/login/login').then(c => c.Login),
  },
  {
    path: '**', redirectTo: '/'
  },
];
