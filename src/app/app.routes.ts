import { Routes } from '@angular/router';
import { PokemonShowcase } from './pokemon-showcase/pokemon-showcase';
import { Pokemart } from './pokemart/pokemart';

export const routes: Routes = [
  { path: 'showcase', component: PokemonShowcase },
  { path: 'mart', component: Pokemart },
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: '**', redirectTo: 'showcase' }
];