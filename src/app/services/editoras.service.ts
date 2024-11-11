import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Editora } from '../../types';



@Injectable({
  providedIn: 'root'
})
export class EditorasService {



  constructor(private http_client : HttpClient) {


  }

  getEditoras()
  {
    return this.http_client.get<Editora[]>(`${environment.API_URL}/editoras`)
  }
}
