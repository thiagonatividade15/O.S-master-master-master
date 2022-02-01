import { Observable } from 'rxjs';

export interface HttpPost {
  post(url, body): Observable<any>;
}