import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { LivroLinhaComponent } from "../../components/livro-linha/livro-linha.component";
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [TitleComponent, LivroLinhaComponent],
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
