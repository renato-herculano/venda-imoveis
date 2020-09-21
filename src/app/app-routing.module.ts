import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { PaginaListaImoveisComponent } from './pagina-lista-imoveis/pagina-lista-imoveis.component';

const routes: Routes = [
  {
    path: '',
    component: MenuNavegacaoComponent,
    children: [
      {
        path: 'imoveis',
        component: PaginaListaImoveisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
