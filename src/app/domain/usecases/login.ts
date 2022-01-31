import { Observable } from 'rxjs';

import { Usuario } from './../entities/usuario';
import { LoginInput } from './../entities/login-input';

export interface Login {
  logar(login: LoginInput): Observable<Usuario>;
}
