import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Exemplos } from './components/exemplos/exemplos';
import { Erro404 } from './components/erro404/erro404';
import { Candidatos } from './components/candidatos/candidatos/candidatos';
import { CandidatosNovo } from './components/candidatos/candidatos-novo/candidatos-novo';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'exemplos', component: Exemplos },
  { path: 'candidatos', component: Candidatos },
  { path: 'candidatos/novo', component: CandidatosNovo },
  { path: '**', component: Erro404 },
];
