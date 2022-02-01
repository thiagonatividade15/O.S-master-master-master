import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { OrdemService } from './../domain/entities/OrdemService';
import { BaseEntityStore } from './helpers/base-entity.store';

@Injectable({
  providedIn: 'root'
})
export class OrdemServiceStore extends BaseEntityStore<OrdemService> {
  protected readonly _entidades = new BehaviorSubject<OrdemService[]>([]);

}
