import { v4 as uuid}  from "uuid"

export interface Editora{
  _id: string
  nome: string
  codigo: number
}
export interface LivroResponse{
  _id: string
  titulo: string
  resumo: string
  autores: string[]
  editora: string
}


export class Livro
{



  constructor(private titulo: string,private resumo: string,private autores: string[],private codEditora: number)
  {

  }
  getTitulo()
  {
    return this.titulo
  }

  getCodEditora()
  {
    return this.codEditora
  }
  getResumo()
  {
    return this.resumo
  }
  getAutores()
  {
    return this.autores
  }

}

