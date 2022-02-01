import { Injectable } from '@angular/core';

import { OrdemService } from '../../domain/entities/OrdemService';
import { OrdemServiceInput } from '../../form-os/model/OrdemService-input';
import { BaseCrudService } from './base-crud.service';
import { OrdemServiceRepository } from '../../infra/repositories/OrdemService.repository';
import { OrdemServiceStore } from './../../store/OrdemService.store';

@Injectable({
  providedIn: 'root'
})
export class OrdemServiceService extends BaseCrudService<OrdemServiceInput, OrdemService> {

  constructor(
    protected store: OrdemServiceStore,
    protected repository: OrdemServiceRepository
    ) {
    super();
  }
}
