import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Exemplos } from './components/exemplos/exemplos';
import { Erro404 } from './components/erro404/erro404';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'exemplos', component: Exemplos },
  { path: '**', component: Erro404 },
];
