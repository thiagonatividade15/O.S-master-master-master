import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpPost } from '../protocols/http-post';

@Injectable({
  providedIn: 'root'
})
export class NgHttpPost implements HttpPost {

  constructor(private http: HttpClient) {}

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

}