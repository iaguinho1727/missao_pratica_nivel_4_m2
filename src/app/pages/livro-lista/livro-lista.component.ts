import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";

import { LivrosService } from '../../services/livros.service';
import { Livro, LivroResponse } from '../../../types';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {

  COLUMNS=['Título','Resumo','Editora','Autores']
  livros : LivroResponse[]=[]


  constructor(public livro_service : LivrosService)
  {

  }
  ngOnInit()
  {
    this.livro_service.getLivros().subscribe(livro_response=>{
      this.livros=livro_response
    })
  }

  excluirLivro(livro : LivroResponse)
  {
    this.livro_service.excluirLivro(livro).subscribe(response=>{
      this.livros=this.livros.filter(item=>item._id!=livro._id)
    })
  }





}
