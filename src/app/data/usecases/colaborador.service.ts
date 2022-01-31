import { Injectable } from '@angular/core';

import { Colaborador } from './../../domain/entities/colaborador';
import { ColaboradorInput } from './../../presentation/area-autenticada/colaborador/model/colaborador-input';
import { BaseCrudService } from './base-crud.service';
import { ColaboradorRepository } from './../../infra/repositories/colaborador.repository';
import { ColaboradorStore } from '../../stores/colaborador.store';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService extends BaseCrudService<ColaboradorInput, Colaborador> {

  constructor(
    protected store: ColaboradorStore,
    protected repository: ColaboradorRepository
    ) {
    super();
  }
}
