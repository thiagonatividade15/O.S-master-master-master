import { BehaviorSubject } from "rxjs";

import { FormularioStatus } from "./formulario-status";
import { FormularioStatusBuilders } from "./formulario-status-builder";

export abstract class BaseEntityStore<T> {
  protected abstract readonly _entidades: BehaviorSubject<T[]>;
  protected readonly _entidadesCarregadas = new BehaviorSubject<boolean>(false);
  protected readonly _formularioStatus = new BehaviorSubject<FormularioStatus>(
    FormularioStatusBuilders.formularioNaoCadastrando());


  constructor() { }

  findById(id: number) {
    return this.entidades.find((entidade: any) => entidade.id === id);
  }
  addEntidade(entidade: T): void {
    this._entidades.next([
      ...this.entidades,
      entidade
    ])
  }
  get entidades(): T[] {
    return this._entidades.getValue();
  }
  set entidades(entidades: T[]) {
    this._entidades.next(entidades);
  }

  get formularioStatus(): FormularioStatus {
    return this._formularioStatus.getValue();
  }
  set formularioStatus(fs: FormularioStatus) {
    this._formularioStatus.next(fs);
  }

  get entidadesCarregadas(): boolean {
    return this._entidadesCarregadas.getValue()
  }

  set entidadesCarregadas(carregada: boolean) {
    this._entidadesCarregadas.next(carregada);
  }
}
