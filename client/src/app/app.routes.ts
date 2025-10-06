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
    path: 'lobby',
    loadComponent: () =>
      import('./view/lobby/lobby').then(c => c.Lobby),
  },
  {
    path: 'morpion',
    loadComponent: () =>
      import('./view/morpion/morpion').then(c => c.Morpion),
  },
  {
    path: 'robo-rally',
    loadComponent: () =>
      import('./view/robo-rally/robo-rally').then(c => c.RoboRally),
  },
  {
    path: 'ae-turn',
    loadComponent: () =>
      import('./components/aeon-end-turn-order/aeon-end-turn-order').then(c => c.AeonEndTurnOrder),
  },
  {
    path: '**', redirectTo: '/'
  },
];
