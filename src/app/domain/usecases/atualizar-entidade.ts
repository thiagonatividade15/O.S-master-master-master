import { Observable } from 'rxjs';

export interface AtualizarEntidade<EntidadeInput, Entidade> {
  update(entidade: EntidadeInput): Observable<Entidade>;
}
