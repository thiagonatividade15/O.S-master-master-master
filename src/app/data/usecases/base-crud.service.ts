import { tap, catchError } from 'rxjs/operators';
import { Observable, defer, of } from 'rxjs';

import { Repository } from './../protocols/repository';
import { FormularioStatusBuilders } from './../../helpers/formulario-status-builder';
import { BaseEntityStore } from './../../helpers/base-entity.store';
import { FormularioStatus } from './../../helpers/formulario-status';

export abstract class BaseCrudService<EntidadeInput, Entidade>
  implements Repository<EntidadeInput, Entidade> {

  protected abstract store: BaseEntityStore<any>;
  protected abstract repository: Repository<EntidadeInput, Entidade>;

  constructor() { }

  create(entidade: EntidadeInput): Observable<Entidade> {
    return defer(() => {
      this.store.formularioStatus = FormularioStatusBuilders
        .formularioCadastrando();

        return this.repository.create(entidade)
          .pipe(tap(entidade => {
            this.store.addEntidade(entidade);
            this.store.formularioStatus = FormularioStatusBuilders
              .formularioComMsgSucesso();
          }),
            catchError(error => {
              this.store.formularioStatus = FormularioStatusBuilders
                .formularioComMsgDeErro();
              throw error;
            }));
    })
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

  findById(id: number): Observable<Entidade> {
    const entidade = this.store.findById(id);
    if (entidade) return of(entidade);
    return this.repository.findById(id)
      .pipe(tap(entidade => this.store.addEntidade(entidade)));
  }

  list(): Observable<Entidade[]> {
    if (this.store.entidadesCarregadas) {
      return of(this.store.entidades);
    }
    return this.repository.list()
      .pipe(tap(entidades => {
        this.store.entidadesCarregadas = true;
        this.store.entidades = entidades;
      }));
  }
  
  update(entidade: EntidadeInput): Observable<Entidade> {
    throw new Error('Method not implemented.');
  }
  
  getFormularioStatus(): FormularioStatus {
    return this.store.formularioStatus;
  }
}
