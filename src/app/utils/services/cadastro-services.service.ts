import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicesService {

  private url: string = "https://61cb756a194ffe0017788d67.mockapi.io/usuarios";

  constructor(private httpClient: HttpClient) { }

  public cadastrarUsuario(usuario: Usuarios): Observable<Usuarios>{
    return this.httpClient.post<Usuarios>(this.url, usuario).pipe(
      map(res => res))
  }

  public buscaUsuarios(): Observable<Array<Usuarios>>{
    return this.httpClient.get<Array<Usuarios>>(this.url).pipe(
      map(res => res))
  }
}
