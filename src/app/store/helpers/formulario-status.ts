import { MensagemFormulario } from './mensagem-formulario';

export class FormularioStatus {

  constructor(private _emRequisicao: boolean,
              private _mensagemFormulario: MensagemFormulario) {}

  get emRequisicao(): boolean {
    return this._emRequisicao;
  }
  set emRequisicao(emRequisicao: boolean) {
    this._emRequisicao = emRequisicao;
  }

  get mensagemFormulario(): MensagemFormulario {
    return this._mensagemFormulario;
  }
  set mensagemFormulario(mensagemFormulario: MensagemFormulario) {
    this._mensagemFormulario = mensagemFormulario;
  }
}