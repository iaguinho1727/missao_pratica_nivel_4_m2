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
  isDeletingMap=new Map()
  isFetching=false


  constructor(public livro_service : LivrosService)
  {

  }
  ngOnInit()
  {
    this.isFetching=true
    this.livro_service.getLivros()
    .subscribe(livro_response=>{
      this.livros=livro_response
      this.isFetching=false
    })
  }

  excluirLivro(livro : LivroResponse)
  {
    this.isDeletingMap.set(livro._id,true)
    this.livro_service.excluirLivro(livro)
    .subscribe(response=>{
      this.livros=this.livros.filter(item=>item._id!=livro._id)
      this.isDeletingMap.set(livro._id,false)
    })
  }





}
