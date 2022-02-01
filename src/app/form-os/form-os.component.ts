import { Component, Inject,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OrdemServiceStore } from './../store/OrdemService.store';
import { ConstruirFormulario } from './protocols/construir-formulario';
import { FormularioCadastroOrdemService } from './formulario-cadastro-O.S';
import { OrdemServiceInput } from './model/OrdemService-input';
import { OrdemServiceService } from './../data/usecases/OrdemService.Service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './form-os.component.html',
  styleUrls: ['./form-os.component.css'],
  providers: [FormularioCadastroOrdemService]
})

export class FormOSComponent implements OnInit {

   formulario: FormGroup;

  constructor(
    @Inject(FormularioCadastroOrdemService) private construirForm: ConstruirFormulario,
    private service: OrdemServiceService,
    public colaboradorStore: OrdemServiceStore,

  ) { }

  ngOnInit(): void {
    this.formulario = this.construirForm.construirFormulario();
  }

  onCadastrar() {
    if (this.formulario.valid) {
      const ordemServiceInput: OrdemServiceInput = this.formulario.value;
      this.service.create(ordemServiceInput).subscribe();
    }
  }

}
