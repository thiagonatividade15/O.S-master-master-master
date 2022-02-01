import { Observable } from 'rxjs';

export interface HttpGet {
  get(url: string): Observable<any>;
}