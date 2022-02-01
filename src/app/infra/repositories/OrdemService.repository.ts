import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { OrdemService } from '../../domain/entities/OrdemService';
import { OrdemServiceInput } from './../../form-os/model/OrdemService-input';
import { BaseRepository } from './base.repository';

@Injectable({
  providedIn: 'root'
})
export class OrdemServiceRepository extends BaseRepository<OrdemServiceInput, OrdemService> {
  protected readonly url = `${environment.api}ordemservices`;


}
