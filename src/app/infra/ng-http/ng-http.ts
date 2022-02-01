import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpPost } from '../protocols/http-post';
import { HttpGet } from '../protocols/http-get';

@Injectable({
  providedIn: 'root'
})
export class NgHttp implements HttpPost, HttpGet {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
  
  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}