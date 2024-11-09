import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";

import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../../types';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {

  COLUMNS=['Título','Resumo','Editora','Autores']

  livros_service : LivrosService

  constructor(livro_service : LivrosService)
  {
    this.livros_service=livro_service
  }



}
