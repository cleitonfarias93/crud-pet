import { ListaPet } from './../models/listaPet';
import { Pet } from '../models/pet.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    ) { }

    url = 'http://localhost:8080';

    gravarDados(pet: Pet): Observable<any> {
      return this.http.post(this.url + '/cadastrar', pet, {responseType: 'text'});
    }

    listarDados() {
      return this.http.get<ListaPet[]>(this.url + '/listar');
    }

    deletarDados(id) {
      return this.http.get(this.url + '/deletar/' + id);
    }

    consultarPetById(id) {
      return this.http.get<ListaPet>(this.url + '/petbyid/' + id);
    }

    editarDados(listaPet: ListaPet): Observable<any> {
      return this.http.post(this.url + '/editar', listaPet, {responseType: 'text'});
    }
}
