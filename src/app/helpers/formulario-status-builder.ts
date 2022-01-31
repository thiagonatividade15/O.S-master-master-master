import { FormularioStatus } from './formulario-status';

export class FormularioStatusBuilders {
  static readonly MSG_PADRAO_SUCESSO = 'Cadastrado com sucesso!';
  static readonly MSG_PADRAO_ERRO = 'Não foi possível realizar o cadastro!';

  static formularioNaoCadastrando(): FormularioStatus {
    return new FormularioStatus(false, null);
  }

  static formularioCadastrando(): FormularioStatus {
    return new FormularioStatus(true, null);
  }

  static formularioComMsgSucesso(msg: string = this.MSG_PADRAO_SUCESSO): FormularioStatus {
    return this.formularioComMsg(msg, 'success');
  }

  static formularioComMsgDeErro(msg: string = this.MSG_PADRAO_ERRO): FormularioStatus {
    return this.formularioComMsg(msg, 'danger');
  }

  private static formularioComMsg(
    msg: string,
    tipo: 'success' | 'danger'): FormularioStatus {

    return new FormularioStatus(false, {
      mensagem: msg,
      tipo: tipo
    });
  }
}