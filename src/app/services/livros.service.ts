import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class LivrosService {


  static LIVROS : any[] =[]

  constructor() {


  }

  salvarLivro()
  {
    LivrosService.LIVROS.push({teste: 'hllo'})
  }
  getLivros()
  {
    return LivrosService.LIVROS
  }


}
