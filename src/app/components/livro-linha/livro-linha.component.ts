import { Component } from '@angular/core';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro-linha',
  standalone: true,
  imports: [],
  template: `

    <tr>
      {{livro_service.getLivros()}}
        <!-- <td >
            <div >
                <div class="w-100">{livro.titulo}</div>
                <button   type="button" class="btn btn-danger mt-3">Excluir</button>
            </div>

        </td>
        <td>{livro.resumo}</td>
        <td>{livro.editora}</td>
        <td>
            <ul>

                {livro.autores.map(item=><li key={item}  > {item} </li>)}
            </ul>
        </td> -->


    </tr>
  `,
  styleUrl: './livro-linha.component.css'
})
export class LivroLinhaComponent {

  livro_service : LivrosService

  constructor(livro_service : LivrosService)
  {
    this.livro_service=livro_service
  }

}
