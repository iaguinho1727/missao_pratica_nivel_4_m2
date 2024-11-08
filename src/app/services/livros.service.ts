import { Injectable } from '@angular/core';
import { Livro } from '../../types';
@Injectable({
  providedIn: 'root'
})





export class LivrosService {


  static LIVROS : Livro[] =[]

  constructor() {


  }

  salvarLivro(titulo: string,resumo: string,autores: string[],editora: string)
  {
    let livro=new Livro(titulo,resumo,autores,editora)
    LivrosService.LIVROS.push(livro)
  }
  excluirLivro(livro : Livro)
  {
    let filtered_livros=LivrosService.LIVROS.filter(item=>item.getCodEditora()!=livro.getCodEditora())
    LivrosService.LIVROS=filtered_livros
  }

  getLivros()
  {
    return LivrosService.LIVROS
  }


}
