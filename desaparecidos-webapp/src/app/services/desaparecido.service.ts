import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPessoasDesaparecidas } from '../models/ListaPessoasDesaparecidas';
import { Desaparecidos } from '../models/Desaparecidos';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidoService {

private BASE_URL = 'https://dev.pjc.mt.gov.br/api-desaparecidos/v1/pessoas';
private BASE_URL_POST = 'https://dev.pjc.mt.gov.br/api-desaparecidos/v1/ocorrencias/informacoes-desaparecido';

constructor(private http: HttpClient) { }

  public getListaDesaparecidos(pesquisa: string, pagina: number, porPagina: number): Observable<ListaPessoasDesaparecidas> {

    let urlCompleta = `${this.BASE_URL}/aberto/filtro?pagina=${pagina}&porPagina=${porPagina}`;

    if(pesquisa != undefined && pesquisa!=""){
      urlCompleta = `${this.BASE_URL}/aberto/filtro?pagina=${pagina}&porPagina=${porPagina}&nome=${pesquisa}`;
    }

    return this.http.get<ListaPessoasDesaparecidas>(urlCompleta);
  }

  public getDesaparecido(id: number): Observable<Desaparecidos> {
    return this.http.get<Desaparecidos>(`${this.BASE_URL}/${id}`);
  }

  public postDesaparecido(formData: FormData): Observable<any> {
    console.log('service: ', formData)
    return this.http.post<any>(this.BASE_URL_POST, formData);
  }

}
