import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { FormsModule } from '@angular/forms';
import { EditorasService } from '../../services/editoras.service';
import { LivrosService } from '../../services/livros.service';
import { Router } from '@angular/router';
import { Editora } from '../../../types';
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
  editora : string=''
  editora_options: Editora[] = [

  ]


  constructor(private  editora_service : EditorasService,private livro_service : LivrosService,private router : Router)
  {

  }
  ngOnInit()
  {
    this.editora_service.getEditoras().subscribe(editoras=>{
      this.editora_options=editoras
      this.editora=String(this.editora_options[0].codigo)
    })
  }

  async salvarLivro()
  {
    this.livro_service.salvarLivro(this.titulo,this.resumo,this.autores.split('\n'),Number(this.editora))
    .subscribe()
    await this.router.navigate(['livros'])
  }



}
