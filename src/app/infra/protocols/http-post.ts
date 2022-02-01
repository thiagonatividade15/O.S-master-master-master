import { Observable } from 'rxjs';

export interface HttpPost {
  post(url: string, body: any): Observable<any>;
}