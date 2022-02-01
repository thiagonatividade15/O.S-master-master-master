import { MensagemFormulario } from '../../store/helpers/mensagem-formulario';
import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-alert-cadastro',
  template: `
    <div class="centralizar-tela">
      <div>
        <alert [type]="dadosMensagem.tipo"
               [dismissible]="dismissible"
               [dismissOnTimeout]="dismissOnTimeout"
               (onClose)="onClose()">
          {{ dadosMensagem.mensagem }}
        </alert>
      </div>
   
  `,
  styles: [`
    .centralizar-tela {
      margin-top: 50px;
      align-items: flex-start;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertCadastroComponent {
  dismissible = true;
  dismissOnTimeout = 5000;

  @Input()
    dadosMensagem: MensagemFormulario;

  @Output()
    close = new EventEmitter<void>();

  constructor() { }

  onClose() {
    this.close.next()
  }

}
