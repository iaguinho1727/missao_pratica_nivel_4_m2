import { v4 as uuid}  from "uuid"

export class Livro
{

  private titulo: string
  private resumo: string
  private editora: string
  private autores: string[]
  private codEditora: string


  constructor(titulo: string,resumo: string,autores: string[],editora: string)
  {
    this.autores=autores
    this.titulo=titulo
    this.resumo=resumo
    this.editora=editora
    this.codEditora=uuid()
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
  getEditora()
  {
    return this.editora
  }

}
