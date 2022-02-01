import { Observable } from 'rxjs';

export interface HttpGet {
  get(url): Observable<any>;
}