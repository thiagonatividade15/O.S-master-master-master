import { AtualizarEntidade } from './../../domain/usecases/atualizar-entidade';
import { ListarEntidade } from './../../domain/usecases/listar-entidade';
import { BuscarEntidadeId } from './../../domain/usecases/buscar-entidade-id';
import { DeletarEntidade } from './../../domain/usecases/deletar-entidade';
import { CadastrarEntidade } from './../../domain/usecases/cadastrar-entidade';

export interface Repository<EntidadeInput, Entidade>
  extends CadastrarEntidade<EntidadeInput, Entidade>,
          DeletarEntidade,
          BuscarEntidadeId<Entidade>,
          ListarEntidade<Entidade>,
          AtualizarEntidade<EntidadeInput, Entidade>
{}