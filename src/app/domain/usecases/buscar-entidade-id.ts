import { Observable } from 'rxjs';

export interface BuscarEntidadeId<Entidade> {
  findById(id: number): Observable<Entidade>;
}
