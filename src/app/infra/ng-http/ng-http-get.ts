import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpGet } from '../protocols/http-get';

@Injectable({
  providedIn: 'root'
})
export class NgHttpGet implements HttpGet {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}