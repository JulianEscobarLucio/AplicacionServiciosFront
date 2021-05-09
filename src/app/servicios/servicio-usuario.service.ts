import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../modelos/usuario';
import { servicePath } from '../costantes';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  private usuarioUrl =  servicePath + 'api/usuario/';  // URL to web api

  constructor(private http: HttpClient) { }

  guardarUsaurio(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.usuarioUrl + 'agregar', usuario, httpOptions);
  }

  login(usuario: Usuario): Observable<string> {
    return this.http.get<string>(this.usuarioUrl + 'login' + '/' + usuario.usuario + '/' + usuario.constrasena, httpOptions);
  }
}
