import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Http } from '../protocols/http';
import { NgHttp } from './../ng-http/ng-http';
import { Repository } from './../../data/protocols/repository';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRepository<EntidadeInput, Entidade>
  implements Repository<EntidadeInput, Entidade> {

  protected abstract url: string;

  constructor(@Inject(NgHttp) protected http: Http) { }

  create(entidade: EntidadeInput): Observable<Entidade> {
    return this.http.post(this.url, entidade);
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

  findById(id: number): Observable<Entidade> {
    return this.http.get(`${this.url}/${id}`);
  }

  list(): Observable<Entidade[]> {
    return this.http.get(`${this.url}`);
  }

  update(entidade: EntidadeInput): Observable<Entidade> {
    throw new Error('Method not implemented.');
  }
}
