import { Routes } from '@angular/router';
import { LivroListaComponent } from './pages/livro-lista/livro-lista.component';
import { LivroFormComponent } from './pages/livro-form/livro-form.component';

export const routes: Routes = [
  {path: '',redirectTo: '/livros',pathMatch: 'full'},
  {path: 'livros',component: LivroListaComponent},
  {path: 'novo',component: LivroFormComponent}
];
