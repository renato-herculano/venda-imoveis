import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImovelModel } from '../imovel-model';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private httpClient: HttpClient) {

  }

  List(): Observable<ImovelModel[]> {
    return this.httpClient.get<ImovelModel[]>('https://it3imoveis.firebaseio.com/vendas.json');
  }
}
