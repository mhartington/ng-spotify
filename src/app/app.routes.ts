import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  {path: 'playlist/:id', loadComponent: () => import('./pages/playlist/playlist.component').then(m => m.PlaylistComponent)},
];
