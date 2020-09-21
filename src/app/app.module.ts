import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locatePT from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaListaImoveisComponent } from './pagina-lista-imoveis/pagina-lista-imoveis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ImovelCardComponent } from './imovel-card/imovel-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

registerLocaleData(locatePT, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    PaginaListaImoveisComponent,
    MenuNavegacaoComponent,
    ImovelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
