import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {
  private editoras : string[] = [
    "Companhia das Letras",
    "Editora Record",
    "Intrínseca",
    "Globo Livros",
    "Editora Rocco",
    "Editora 34",
    "Editora Planeta",
    "Editora Aleph",
    "Sextante",
    "DarkSide Books"
  ]
  constructor() { }

  getEditoras() : string[]
  {
    return this.editoras
  }
}
