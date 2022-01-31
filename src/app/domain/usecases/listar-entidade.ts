import { Observable } from 'rxjs';

export interface ListarEntidade<Entidade> {
  list(): Observable<Entidade[]>;
}
