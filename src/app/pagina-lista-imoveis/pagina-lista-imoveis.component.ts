import { Component, OnInit } from '@angular/core';
import { ImoveisApiService } from '../services/imoveis-api.service';
import { ImovelModel } from '../imovel-model';

@Component({
  selector: 'app-pagina-lista-imoveis',
  templateUrl: './pagina-lista-imoveis.component.html',
  styleUrls: ['./pagina-lista-imoveis.component.css']
})
export class PaginaListaImoveisComponent implements OnInit {

  listaImoveis: ImovelModel[];

  constructor(private imovelApi: ImoveisApiService) {

  }

  ngOnInit(): void {
    this.imovelApi.List()
      .subscribe(lista => {
        this.listaImoveis = lista;
      })
  }

}
