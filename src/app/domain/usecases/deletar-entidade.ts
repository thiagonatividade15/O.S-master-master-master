import { Observable } from 'rxjs';

export interface DeletarEntidade {
  delete(id: number): Observable<void>;
}
