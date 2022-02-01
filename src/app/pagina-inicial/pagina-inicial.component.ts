import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  template: `<div class="footer row "><span
        class="col-sm-12 text-center">@2022 EBNS IND. Todos os direitos reservados.</span>
                    <span class=" text-center">V. 1.0.0.8</span>
             </div>`,
  styleUrls: ['./pagina-inicial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
