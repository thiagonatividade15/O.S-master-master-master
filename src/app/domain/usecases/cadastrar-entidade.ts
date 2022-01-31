import { Observable } from 'rxjs';

export interface CadastrarEntidade<EntidadeInput, Entidade> {
  create(entidade: EntidadeInput): Observable<Entidade>;
}
