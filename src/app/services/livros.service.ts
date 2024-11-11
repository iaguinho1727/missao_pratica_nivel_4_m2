import { Injectable } from '@angular/core';
import { Livro, LivroResponse } from '../../types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})


export class LivrosService {




  constructor(private http_client : HttpClient) {


  }

  salvarLivro(titulo: string,resumo: string,autores: string[],codEditora: number)
  {
    let livro=new Livro(titulo,resumo,autores,codEditora)
    return this.http_client.post(`${environment.API_URL}/livros`,livro)
  }
  excluirLivro(livro : LivroResponse)
  {
    return this.http_client.delete(`${environment.API_URL}/livros/${livro._id}`)
  }

  getLivros()
  {
    return this.http_client.get<LivroResponse[]>(`${environment.API_URL}/livros`)
  }


}
