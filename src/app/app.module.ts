import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormOSComponent } from './form-os/form-os.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenuComponent } from './pagina-inicial/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pagina-inicial/header/header.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pagina-inicial/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    FormOSComponent,
    PaginaInicialComponent,
    MenuComponent,
    HeaderComponent,
    PesquisarComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
