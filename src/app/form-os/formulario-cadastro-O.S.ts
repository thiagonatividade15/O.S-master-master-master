import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConstruirFormulario } from './protocols/construir-formulario';
import { ValidacaoFormulario } from './../validacaoform/validacao-formulario';

@Injectable()

export class FormularioCadastroOrdemService implements ConstruirFormulario {
  constructor(private formBuilder: FormBuilder){}

  construirFormulario(): FormGroup {
    return this.formBuilder.group({
      cliente: [null, [Validators.required, Validators.maxLength(50)]],
      servico: [null, [Validators.required, Validators.maxLength(50)]],
      laboratorio: [null, [Validators.required, Validators.maxLength(20)]],
      equipamento: [null, [Validators.required, Validators.maxLength(45)]],
      observacao: [null, [Validators.maxLength(200)]],
       prazo  : [null, [Validators.required, ValidacaoFormulario.data]],
      status: [null, [Validators.required]],
      prioridade: [null, [Validators.required]],
      proposta: [null, [Validators.maxLength(100)]]
    });
  }
}

