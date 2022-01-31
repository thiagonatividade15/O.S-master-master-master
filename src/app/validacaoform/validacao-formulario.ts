import { FormControl } from "@angular/forms";


export class ValidacaoFormulario {

  
 
  static data(control: FormControl) {
    const value = control.value;
    if(value && value !== '') {
      return /^[0-9]{4}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1}))$/.test(value) ? null : { data: true };
    }

    return null;
  }
