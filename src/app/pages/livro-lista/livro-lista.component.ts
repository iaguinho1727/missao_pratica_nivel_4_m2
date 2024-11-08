import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { LivroLinhaComponent } from "../../components/livro-linha/livro-linha.component";

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [TitleComponent, LivroLinhaComponent],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {

  COLUMNS=['Título','Resumo','Editora','Autores']

}
