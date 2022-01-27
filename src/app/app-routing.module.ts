import { RouterModule, Routes } from '@angular/router';
import { PesquisarComponent } from './pagina-inicial/pesquisar/pesquisar.component';
import { NgModule } from '@angular/core';
import { FormOSComponent } from './form-os/form-os.component';
import { HomeComponent } from './pagina-inicial/home/home.component';

export const routes: Routes = [
  {
    path:'pesquisar',
    component:PesquisarComponent

  },
  {
    path:'form',
    component:FormOSComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}