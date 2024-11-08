import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { FormsModule } from '@angular/forms';
import { EditorasService } from '../../services/editoras.service';
import { LivrosService } from '../../services/livros.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [TitleComponent,FormsModule],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.css'
})
export class LivroFormComponent {
  titulo : string=''
  resumo : string=''
  autores : string=''
  EDITORAS_OPTIONS: string[] = [

  ]
  livro_service : LivrosService
  editora: string=''
  router : Router
  constructor( editora : EditorasService,livro_service : LivrosService,router : Router)
  {
    this.EDITORAS_OPTIONS=editora.getEditoras()
    this.editora=this.EDITORAS_OPTIONS[0]
    this.livro_service=livro_service
    this.router=router
  }

  async salvarLivro()
  {
    this.livro_service.salvarLivro(this.titulo,this.resumo,this.autores.split('\n'),this.editora)
    await this.router.navigate(['livros'])
  }



}
