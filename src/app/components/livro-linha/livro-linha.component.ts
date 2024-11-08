import { Component, Input } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../../types';

@Component({
  selector: 'app-livro-linha',
  standalone: true,
  imports: [],
  template: `

    <tr>

        <td >
            <div >
                <div class="w-100">{{livro.getTitulo()}}</div>
                <button (click)="excluirLivro()"  type="button" class="btn btn-danger mt-3">Excluir</button>
            </div>

        </td>
        <td>{{livro.getResumo()}}</td>
        <td>{{livro.getEditora()}}</td>
        <td>
            <ul>
              @for(autor of livro.getAutores();track livro.getCodEditora()){
                <li>{{autor}}</li>
              }
            </ul>
        </td>


    </tr>
  `,
  styleUrl: './livro-linha.component.css'
})
export class LivroLinhaComponent {

  @Input() livro !: Livro
  livro_service : LivrosService

  constructor(livro_service : LivrosService)

  {
    this.livro_service=livro_service
  }

  excluirLivro()
  {
    this.livro_service.excluirLivro(this.livro)
  }


}
